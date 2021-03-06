import { StyleSheet } from 'react-native';
import { Theme, Color } from '../Constants';
const ParentStyle = StyleSheet.create({
  ///// global
  wrp: {
    flex: 1,
    backgroundColor: Color.black,
  },
  bg_app: {
    backgroundColor: Color.black,
  },
  bg_Blue: {
    backgroundColor: Color.blue,
  },
  color_W: {
    color: Color.white,
  },
  color_B: {
    color: Color.lightTxt,
  },
  center_row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  center_cloumn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  between_cloumn: {
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'column',
  },
  between_row: {
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  cloumn: {
    flexDirection: 'column',
  },
  paddingWrp_H: {
    paddingHorizontal: 20,
  },
  marginWrp_H: {
    marginHorizontal: 20,
  },
  // Text custom style start
  Text_W_M: {
    color: Color.white,
    fontSize: 14,
    fontFamily: Theme.Fonts.medium,
  },
  Text_W_U: {
    color: Color.white,
    fontSize: 15,
    fontFamily: Theme.Fonts.medium,
  },
  Text_W_T: {
    color: Color.white,
    fontSize: 16,
    fontFamily: Theme.Fonts.regular,
  },
  Text_W_TR: {
    color: Color.white,
    fontSize: 17,
    fontFamily: Theme.Fonts.medium,
  },
  Text_W_L: {
    color: Color.white,
    fontSize: 20,
    fontFamily: Theme.Fonts.medium,
  },
  Text_W_XR: {
    color: Color.white,
    fontSize: 11,
    fontFamily: Theme.Fonts.medium,
  },
  Text_W_xL: {
    color: Color.white,
    fontSize: 22,
    fontFamily: Theme.Fonts.medium,
  },
  Text_C_M: {
    color: Color.lightTxt,
    fontSize: 14,
    fontFamily: Theme.Fonts.medium,
  },
  Text_C_Xs: {
    color: Color.lightTxt,
    fontSize: 13,
    fontFamily: Theme.Fonts.medium,
  },
  Text_W_B: {
    color: Color.white,
    fontSize: 25,
    fontFamily: Theme.Fonts.bold,
  },
  Text_C_B: {
    color: Color.lightTxt,
    fontSize: 25,
    fontFamily: Theme.Fonts.medium,
  },
  Text_C_xB: {
    color: Color.lightTxt,
    fontSize: 14,
    fontFamily: Theme.Fonts.bold,
  },
  Text_C_l: {
    color: Color.lightTxt,
    fontSize: 12,
    fontFamily: Theme.Fonts.regular,
  },
  Text_C_R: {
    color: '#b6b7ba',
    fontSize: 12,
    fontFamily: Theme.Fonts.light,
  },
  Text_C_U: {
    color: Color.lightTxt,
    fontSize: 15,
    fontFamily: Theme.Fonts.medium,
  },
  Text_W_R: {
    color: Color.white,
    fontSize: 10,
    fontFamily: Theme.Fonts.regular,
  },
  Text_W_S: {
    color: Color.white,
    fontSize: 12,
    fontFamily: Theme.Fonts.light,
  },
  text_center: {
    textAlign: 'center',
  },
  // Text custom style end
});
export default ParentStyle;
