import React, {
  useContext,
} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { LinearGradient }
from 'expo-linear-gradient';

import {
  WalletContext,
} from '../context/WalletContext';

export default function HomeScreen() {

  const {
    points,
    sol,
  } = useContext(WalletContext);

  return (

    <LinearGradient
      colors={['#021014', '#062B33']}
      style={{
        flex: 1,
      }}
    >

      <ScrollView
        contentContainerStyle={{
          padding: 25,
          paddingTop: 60,
        }}
      >

        <Text
          style={{
            color: '#22FF88',
            fontSize: 42,
            fontWeight: 'bold',
          }}
        >
          E-COL
        </Text>

        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 20,
            marginTop: 10,
            lineHeight: 30,
          }}
        >
          Recicle hoje,{'\n'}
          colha o futuro.
        </Text>

        {/* CARD PRINCIPAL */}

        <View
          style={{
            backgroundColor: '#0C2E36',
            padding: 30,
            borderRadius: 30,
            marginTop: 40,

            shadowColor: '#22FF88',
            shadowOpacity: 0.4,
            shadowRadius: 20,
            elevation: 10,
          }}
        >

          <Text
            style={{
              color: '#888',
              fontSize: 16,
            }}
          >
            SALDO TOTAL
          </Text>

          <Text
            style={{
              color: '#22FF88',
              fontSize: 40,
              fontWeight: 'bold',
              marginTop: 10,
            }}
          >
            {points}
          </Text>

          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 20,
              marginTop: 10,
            }}
          >
            {sol} SOL
          </Text>

        </View>

        {/* RECOMPENSAS */}

        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          Recompensas
        </Text>

        {/* CARD 1 */}

        <View
          style={{
            backgroundColor: '#0C2E36',
            padding: 25,
            borderRadius: 25,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: '#22FF88',
          }}
        >

          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            🛒 Mercado Verde
          </Text>

          <Text
            style={{
              color: '#22FF88',
              marginTop: 12,
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            10% OFF
          </Text>

        </View>

        {/* CARD 2 */}

        <View
          style={{
            backgroundColor: '#0C2E36',
            padding: 25,
            borderRadius: 25,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: '#22FF88',
          }}
        >

          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            💊 Farma Eco
          </Text>

          <Text
            style={{
              color: '#22FF88',
              marginTop: 12,
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            15% OFF
          </Text>

        </View>

        {/* BOTÃO */}

        <TouchableOpacity
          style={{
            backgroundColor: '#22FF88',
            padding: 22,
            borderRadius: 25,
            marginTop: 20,
            alignItems: 'center',
          }}
        >

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#021014',
            }}
          >
            ESCANEAR RECICLÁVEL
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </LinearGradient>
  );
}