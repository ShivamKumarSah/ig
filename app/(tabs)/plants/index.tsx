import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Droplets, Thermometer, Sun } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const plants = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    image: 'https://plus.unsplash.com/premium_photo-1669148911895-a95de51d09ca?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    health: 'Excellent',
    healthScore: 95,
    lastWatered: '2 days ago',
    optimalConditions: {
      moisture: '65-75%',
      temperature: '20-25°C',
      light: 'Bright indirect'
    }
  },
  {
    id: '2',
    name: 'Snake Plant',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    health: 'Good',
    healthScore: 85,
    lastWatered: '5 days ago',
    optimalConditions: {
      moisture: '40-50%',
      temperature: '18-27°C',
      light: 'Low to bright indirect'
    }
  },
  {
    id: '3',
    name: 'Peace Lily',
    image: 'https://images.unsplash.com/photo-1616690248297-1ec539dd910f?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    health: 'Needs Attention',
    healthScore: 70,
    lastWatered: '7 days ago',
    optimalConditions: {
      moisture: '60-70%',
      temperature: '18-30°C',
      light: 'Low to moderate'
    }
  }
];

function getHealthColor(score: number) {
  if (score >= 90) return '#2F9E44';
  if (score >= 80) return '#40C057';
  if (score >= 70) return '#FCC419';
  return '#FA5252';
}

export default function PlantsScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#2F9E44', '#40C057']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>My Plants</Text>
        <Text style={styles.headerSubtitle}>Monitoring {plants.length} plants</Text>
      </LinearGradient>

      <View style={styles.plantsGrid}>
        {plants.map((plant) => (
          <Link href={`/plants/${plant.id}`} key={plant.id} asChild>
            <Pressable style={styles.plantCard}>
              <Image
                source={{ uri: plant.image }}
                style={styles.plantImage}
              />
              <View style={styles.plantInfo}>
                <Text style={styles.plantName}>{plant.name}</Text>
                <View style={styles.healthContainer}>
                  <View
                    style={[
                      styles.healthIndicator,
                      { backgroundColor: getHealthColor(plant.healthScore) }
                    ]}
                  />
                  <Text style={styles.healthText}>{plant.health}</Text>
                </View>
                <View style={styles.conditionsContainer}>
                  <View style={styles.condition}>
                    <Droplets size={16} color="#666666" />
                    <Text style={styles.conditionText}>{plant.optimalConditions.moisture}</Text>
                  </View>
                  <View style={styles.condition}>
                    <Thermometer size={16} color="#666666" />
                    <Text style={styles.conditionText}>{plant.optimalConditions.temperature}</Text>
                  </View>
                  <View style={styles.condition}>
                    <Sun size={16} color="#666666" />
                    <Text style={styles.conditionText}>{plant.optimalConditions.light}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>
        ))}
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
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: '#ffffff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  plantsGrid: {
    padding: 16,
  },
  plantCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  plantImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  plantInfo: {
    padding: 20,
  },
  plantName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#212529',
    marginBottom: 8,
  },
  healthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  healthIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  healthText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#495057',
  },
  conditionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
  },
  condition: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  conditionText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#495057',
  },
});