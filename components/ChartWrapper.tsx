import { Platform } from 'react-native';
import { LineChart as RNLineChart } from 'react-native-chart-kit';

type ChartWrapperProps = React.ComponentProps<typeof RNLineChart>;

export function LineChart(props: ChartWrapperProps) {
  // Remove responder props on web platform
  const chartProps = Platform.select({
    web: {
      ...props,
      onStartShouldSetResponder: undefined,
      onResponderTerminationRequest: undefined,
      onResponderGrant: undefined,
      onResponderMove: undefined,
      onResponderRelease: undefined,
      onResponderTerminate: undefined,
    },
    default: props,
  });

  return <RNLineChart {...chartProps} />;
}