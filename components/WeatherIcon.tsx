import { Platform } from 'react-native';
import { Bone as LucideIcon } from 'lucide-react-native';

type WeatherIconProps = {
  icon: typeof LucideIcon;
  size?: number;
  color?: string;
};

export function WeatherIcon({ icon: Icon, size = 24, color = '#212529' }: WeatherIconProps) {
  // Remove all responder props on web platform
  const iconProps = Platform.select({
    web: {
      onStartShouldSetResponder: undefined,
      onResponderTerminationRequest: undefined,
      onResponderGrant: undefined,
      onResponderMove: undefined,
      onResponderRelease: undefined,
      onResponderTerminate: undefined,
    },
    default: {},
  });

  return <Icon size={size} color={color} {...iconProps} />;
}