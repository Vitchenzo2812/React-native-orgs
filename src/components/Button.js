import { TouchableOpacity, StyleSheet } from "react-native";
import TextFont from "./Text";

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6
  },

  textButton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26
  },
}) 

export default function Button({ text }) {
  return(
    <TouchableOpacity style={styles.button}>
      <TextFont style={styles.textButton}>{text}</TextFont>
    </TouchableOpacity>
  )
}