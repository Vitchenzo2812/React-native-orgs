import { View, Image, StyleSheet, FlatList } from 'react-native'
import TextFont from '../../../components/Text'

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
  },

  image: {
    width: 46,
    height: 46,
  },

  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  }
})

export default function Item({ item: { name, image } }) {
  return(
    <View style={styles.item}>
      <Image source={image} style={styles.image}/>
      <TextFont style={styles.name}>{name}</TextFont>
    </View>
  )
}