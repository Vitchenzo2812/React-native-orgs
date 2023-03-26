import { Image, StyleSheet, Dimensions } from 'react-native'
import TextFont from '../../../components/Text'
import top from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 578 / 768 * width,
  },

  title: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 16,
  },
})

export default function Top({ title }) {
  return(
    <>
      <Image source={top} style={styles.top} />
      <TextFont style={styles.title}>{title}</TextFont>
    </>
  )
}