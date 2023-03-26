import { View, StyleSheet, Image } from 'react-native'
import TextFont from '../../../components/Text'
import Button from '../../../components/Button'

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },

  farmName: {
    fontSize: 16,
    lineHeight: 26,
  },

  imageFarm: {
    width: 32,
    height: 32,
  },

  containerFarm: {
    flexDirection: 'row',
    paddingVertical: 12,
    gap: 12,
  },

  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },

  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  },
})

export default function Details({ name, farmName, logoFarm, description, price, button }) {
  return(
    <>
      <TextFont style={styles.name}>{name}</TextFont>
      <View style={styles.containerFarm}>
        <Image source={logoFarm} style={styles.imageFarm}/>
        <TextFont style={styles.farmName}>{farmName}</TextFont>
      </View>
      <TextFont style={styles.description}>{description}</TextFont>
      <TextFont style={styles.price}>{price}</TextFont>
      <Button text={button}/>
    </>
  )
}