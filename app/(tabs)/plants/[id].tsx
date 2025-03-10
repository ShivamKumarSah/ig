import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, Droplets, Thermometer, Sun, Wind, Activity } from 'lucide-react-native';
import { LineChart } from '@/components/ChartWrapper';
import { LinearGradient } from 'expo-linear-gradient';

const plants = {
  '1': {
    id: '1',
    name: 'Monstera Deliciosa',
    image: 'https://plus.unsplash.com/premium_photo-1669148911895-a95de51d09ca?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    health: 'Excellent',
    healthScore: 95,
    lastWatered: '2 days ago',
    nextWatering: 'Tomorrow',
    optimalConditions: {
      moisture: '65-75%',
      temperature: '20-25°C',
      light: 'Bright indirect',
      humidity: '60-80%'
    },
    currentConditions: {
      moisture: 70,
      temperature: 23,
      light: 75,
      humidity: 65
    },
    history: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [65, 68, 70, 72, 68, 65, 70],
        },
      ],
    },
    care: [
      'Water when top 2-3 inches of soil feels dry',
      'Maintain humidity above 60%',
      'Rotate plant quarterly for even growth',
      'Clean leaves monthly with damp cloth',
      'Fertilize monthly during growing season'
    ]
  },
  '2': {
    id: '2',
    name: 'Snake Plant',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    health: 'Good',
    healthScore: 85,
    lastWatered: '5 days ago',
    nextWatering: 'In 3 days',
    optimalConditions: {
      moisture: '40-50%',
      temperature: '18-27°C',
      light: 'Low to bright indirect',
      humidity: '40-50%'
    },
    currentConditions: {
      moisture: 45,
      temperature: 22,
      light: 60,
      humidity: 45
    },
    history: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [45, 45, 48, 46, 45, 44, 45],
        },
      ],
    },
    care: [
      'Water only when soil is completely dry',
      'Tolerates low light but prefers indirect bright light',
      'Can handle low humidity environments',
      'Rarely needs repotting',
      'Minimal fertilization needed'
    ]
  },
  '3': {
    id: '3',
    name: 'Peace Lily',
    image: 'https://images.unsplash.com/photo-1616690248297-1ec539dd910f?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    health: 'Needs Attention',
    healthScore: 70,
    lastWatered: '7 days ago',
    nextWatering: 'Today',
    optimalConditions: {
      moisture: '60-70%',
      temperature: '18-30°C',
      light: 'Low to moderate',
      humidity: '50-60%'
    },
    currentConditions: {
      moisture: 55,
      temperature: 24,
      light: 50,
      humidity: 45
    },
    history: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [65, 62, 58, 55, 52, 50, 55],
        },
      ],
    },
    care: [
      'Water when top of soil feels dry',
      'Keep away from direct sunlight',
      'Mist leaves regularly',
      'Feed with balanced fertilizer every 6 weeks',
      'Remove yellow leaves promptly'
    ]
  }
};

export default function PlantDetails() {
  const { id } = useLocalSearchParams();
  const plant = plants[id as keyof typeof plants];

  if (!plant) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Plant not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#212529" />
        </Pressable>
        <Image source={{ uri: plant.image }} style={styles.plantImage} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.imageOverlay}
        >
          <Text style={styles.plantName}>{plant.name}</Text>
        </LinearGradient>
      </View>

      <View style={styles.content}>
        <View style={styles.healthSection}>
          <View style={styles.healthScore}>
            <Activity size={24} color="#2F9E44" />
            <Text style={styles.healthScoreText}>{plant.healthScore}%</Text>
            <Text style={styles.healthLabel}>Health Score</Text>
          </View>
          <View style={styles.wateringInfo}>
            <Text style={styles.wateringLabel}>Last Watered</Text>
            <Text style={styles.wateringText}>{plant.lastWatered}</Text>
            <Text style={styles.wateringLabel}>Next Watering</Text>
            <Text style={styles.wateringText}>{plant.nextWatering}</Text>
          </View>
        </View>

        <View style={styles.conditionsGrid}>
          <View style={styles.conditionCard}>
            <Droplets size={24} color="#2F9E44" />
            <Text style={styles.conditionValue}>{plant.currentConditions.moisture}%</Text>
            <Text style={styles.conditionLabel}>Moisture</Text>
            <Text style={styles.conditionOptimal}>Optimal: {plant.optimalConditions.moisture}</Text>
          </View>
          <View style={styles.conditionCard}>
            <Thermometer size={24} color="#2F9E44" />
            <Text style={styles.conditionValue}>{plant.currentConditions.temperature}°C</Text>
            <Text style={styles.conditionLabel}>Temperature</Text>
            <Text style={styles.conditionOptimal}>Optimal: {plant.optimalConditions.temperature}</Text>
          </View>
          <View style={styles.conditionCard}>
            <Sun size={24} color="#2F9E44" />
            <Text style={styles.conditionValue}>{plant.currentConditions.light}%</Text>
            <Text style={styles.conditionLabel}>Light</Text>
            <Text style={styles.conditionOptimal}>Optimal: {plant.optimalConditions.light}</Text>
          </View>
          <View style={styles.conditionCard}>
            <Wind size={24} color="#2F9E44" />
            <Text style={styles.conditionValue}>{plant.currentConditions.humidity}%</Text>
            <Text style={styles.conditionLabel}>Humidity</Text>
            <Text style={styles.conditionOptimal}>Optimal: {plant.optimalConditions.humidity}</Text>
          </View>
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.sectionTitle}>Moisture Trends</Text>
          <LineChart
            data={plant.history}
            width={350}
            height={200}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(47, 158, 68, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#2F9E44'
              }
            }}
            bezier
            style={styles.chart}
          />
        </View>

        <View style={styles.careSection}>
          <Text style={styles.sectionTitle}>Care Instructions</Text>
          {plant.care.map((instruction, index) => (
            <View key={index} style={styles.careItem}>
              <View style={styles.careBullet} />
              <Text style={styles.careText}>{instruction}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  plantImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'flex-end',
    padding: 20,
  },
  content: {
    padding: 20,
  },
  plantName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  healthSection: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  healthScore: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#e5e5e5',
  },
  healthScoreText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
    color: '#2F9E44',
    marginVertical: 8,
  },
  healthLabel: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#868e96',
  },
  wateringInfo: {
    flex: 1,
    paddingLeft: 20,
  },
  wateringLabel: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#868e96',
    marginBottom: 4,
  },
  wateringText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#212529',
    marginBottom: 12,
  },
  conditionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  conditionCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  conditionValue: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: '#212529',
    marginTop: 8,
  },
  conditionLabel: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#868e96',
    marginTop: 4,
  },
  conditionOptimal: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#2F9E44',
    marginTop: 8,
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#212529',
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  careSection: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  careItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  careBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2F9E44',
    marginRight: 12,
  },
  careText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#495057',
    flex: 1,
  },
  errorText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#FA5252',
    textAlign: 'center',
    marginTop: 20,
  },
});