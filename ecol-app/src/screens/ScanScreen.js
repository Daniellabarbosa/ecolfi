import React, {
  useContext,
} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  WalletContext,
} from '../context/WalletContext';

import {
  sendRecycleMemo,
} from '../solana/memoTransaction';

export default function ScanScreen() {

  const {
    recycle,
    points,
    sol,
  } = useContext(WalletContext);

  async function handleRecycle(
    material,
    score
  ) {

    recycle(score);

    const signature =
      await sendRecycleMemo(
        material,
        score
      );

    alert(
      `${material} reciclado!\n+${score} pontos\n\nTX:\n${signature}`
    );
  }

  const materials = [

    {
      name: 'Vidro',
      points: 30,
      emoji: '🍾',
    },

    {
      name: 'Plástico',
      points: 25,
      emoji: '🧴',
    },

    {
      name: 'Papel',
      points: 20,
      emoji: '📦',
    },

    {
      name: 'Alumínio',
      points: 35,
      emoji: '🥫',
    },

  ];

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: '#021014',
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
            fontSize: 38,
            fontWeight: 'bold',
          }}
        >
          Scanner
        </Text>

        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 18,
            marginTop: 10,
            marginBottom: 35,
          }}
        >
          Escolha o material reciclável
        </Text>

        {/* CAMERA FAKE */}

        <View
          style={{
            height: 220,
            borderRadius: 30,
            backgroundColor: '#0C2E36',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 35,
            borderWidth: 2,
            borderColor: '#22FF88',
          }}
        >

          <Text
            style={{
              fontSize: 70,
            }}
          >
            📷
          </Text>

          <Text
            style={{
              color: '#22FF88',
              marginTop: 20,
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Scanner Inteligente
          </Text>

        </View>

        {/* MATERIAIS */}

        {materials.map((item, index) => (

          <TouchableOpacity
            key={index}

            onPress={() =>
              handleRecycle(
                item.name,
                item.points
              )
            }

            style={{
              backgroundColor: '#0C2E36',
              padding: 28,
              borderRadius: 25,
              marginBottom: 20,
              borderWidth: 1,
              borderColor: '#22FF88',
            }}
          >

            <Text
              style={{
                fontSize: 32,
              }}
            >
              {item.emoji}
            </Text>

            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 12,
              }}
            >
              {item.name}
            </Text>

            <Text
              style={{
                color: '#22FF88',
                fontSize: 18,
                marginTop: 8,
              }}
            >
              +{item.points} pontos
            </Text>

          </TouchableOpacity>

        ))}

        {/* RESUMO */}

        <View
          style={{
            backgroundColor: '#0C2E36',
            padding: 25,
            borderRadius: 25,
            marginTop: 20,
            marginBottom: 40,
          }}
        >

          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
            }}
          >
            Pontuação Atual
          </Text>

          <Text
            style={{
              color: '#22FF88',
              fontSize: 36,
              fontWeight: 'bold',
              marginTop: 10,
            }}
          >
            {points} pontos
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

      </ScrollView>

    </View>
  );
}