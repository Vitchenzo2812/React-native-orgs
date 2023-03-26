import { StyleSheet, View, FlatList } from "react-native"
import Details from "./components/Details"
import Item from "./components/Item"
import Top from "./components/Top"
import TextFont from "../../components/Text"

const styles = StyleSheet.create({ 
  containerBasket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  
  title: {
    color: '#464646',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
    marginTop: 32,
    marginBottom: 8,
  },
})

export default function Cesta({ top, details, items }) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return(
          <>
            <Top {...top}/>
            <View style={styles.containerBasket}>
              <Details {...details}/>
              <TextFont style={styles.title}>{items.title}</TextFont>
            </View>
          </>
          )
        }}
      />
    </>
  )
}