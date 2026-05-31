import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  FadeOutLeft,
  runOnJS,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.4;

type Props = {
  item: {
    id: string;
    title: string;
    description: string;
    date?: string;
  };
  onDelete: (id: string) => void;
};

export default function SwipeItem({ item, onDelete }: Props) {
  const translateX = useSharedValue(0);
  const startX = useSharedValue(0); // snapshot on gesture start

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startX.value = translateX.value;
    })
    .onUpdate((event) => {
      const targetX = startX.value + event.translationX;
      if (targetX < 0) {
        translateX.value = targetX;
      }
    })
    .onEnd(() => {
      if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
        translateX.value = withTiming(-SCREEN_WIDTH, { duration: 200 }, () => {
          runOnJS(onDelete)(item.id); // ✅ safely cross worklet → JS boundary
        });
      } else {
        translateX.value = withSpring(0, { damping: 15, stiffness: 120 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.View
      style={styles.container}
      exiting={FadeOutLeft.duration(200)} // ✅ animates the row out of the list
    >
      <View style={styles.background}>
        <Text style={styles.trash}>Delete</Text>
      </View>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.foreground, animatedStyle]}>
          <View style={styles.textDisplay}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.textDescription}>{item.description}</Text>
            <Text style={styles.textDate}>{item.date}</Text>
          </View>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
    backgroundColor: "#D11A2A",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  trash: {
    color: "white",
    fontWeight: "bold",
  },
  foreground: {
    height: "100%",
    backgroundColor: "#F0C1CC",
    justifyContent: "center",
    paddingHorizontal: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    borderBottomWidth: 1,
    borderBottomColor: '#F9E7EB'
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3A3737'
  },
  textDate: {
    fontSize: 12,
    fontWeight: '600',
  },
  textDescription: {
    fontSize: 12,
  },
  textDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
});