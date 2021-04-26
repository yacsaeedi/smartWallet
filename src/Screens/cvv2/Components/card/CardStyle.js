import {StyleSheet} from 'react-native';
import {Color} from '../../../../Constants';
const styles = StyleSheet.create({
  cardBox: {
    width: 355,
    height: 190,
    backgroundColor: Color.bgBox,
    borderRadius: 12,
    marginTop: 50,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  cardNum: {
    width: '100%',
    // marginTop: 30,
    textAlign: 'center',
  },
  btnBox: {
    // marginTop: 25,
    // marginBottom: 25,
  },
  cvvInput: {
    height: 20,
    padding: 0,
  },
});
export default styles;
