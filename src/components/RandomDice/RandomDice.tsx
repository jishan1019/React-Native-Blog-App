/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Pressable,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import DiceOne from '../../../assets/One.png';
import DiceTwo from '../../../assets/Two.png';
import DiceThree from '../../../assets/Three.png';
import DiceFour from '../../../assets/Four.png';
import DiceFive from '../../../assets/Five.png';
import DiceSix from '../../../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const RandomDice = (): JSX.Element => {
  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(DiceOne);

  const handleRoleDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImg(DiceOne);
        break;
      case 2:
        setDiceImg(DiceTwo);
        break;
      case 3:
        setDiceImg(DiceThree);
        break;
      case 4:
        setDiceImg(DiceFour);
        break;
      case 5:
        setDiceImg(DiceFive);
        break;
      case 6:
        setDiceImg(DiceSix);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImg} />

      <Pressable onPress={handleRoleDice}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
    height: 800,
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 30,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default RandomDice;
