import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    backgroundColor: 'black',
  },
  container: {
    flex: 0,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  containerBox: {
    zIndex: 2,
    opacity: 1,
    backgroundColor: 'transparent',
  },
  modalHeader: {
    backgroundColor: '#EDEBF6',
    borderRadius: 20,
    height: 3,
    marginTop: 2,
    width: 30,
  },
  panTouchView: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 30,
    left: 0,
    paddingTop: 10,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});
