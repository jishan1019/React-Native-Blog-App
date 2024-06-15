/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length of the password is required'),
});

const PassGeneratorHome = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const genertePasswordString = (passwordLength: number) => {
    let charactorsList = '';
    const uppercaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz';

    const digitChar = '0123456789';
    const specialChar = '!@#$%^&*()_+';

    if (lowerCase) {
      charactorsList += lowerCase;
    }

    if (upperCase) {
      charactorsList += upperCase;
    }

    if (numbers) {
      charactorsList += numbers;
    }

    if (symbols) {
      charactorsList += symbols;
    }

    const passwordResult = createPassword(charactorsList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (charactors: string, passwordLength: number) => {
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * charactors.length);
      result += charactors.charAt(characterIndex);
    }

    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(true);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text>PassGeneratorHome</Text>
    </View>
  );
};

export default PassGeneratorHome;
