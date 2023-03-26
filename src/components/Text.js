import { Text, StyleSheet } from 'react-native'

export default function TextFont({ children, style }) {
  let styleFont = styles.text;

  if(style?.fontWeight === 'bold') {
    styleFont = styles.textBold; 
  }

  return <Text style={[style, styleFont]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'normal',
    fontFamily: 'MontserratRegular'
  },

  textBold: {
    fontWeight: 'normal',
    fontFamily: 'MontserratBold'
  }
})