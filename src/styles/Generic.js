import { StyleSheet, useColorScheme } from "react-native"

const Colors = () => {
  const theme = useColorScheme()
  return {
    background: theme == 'dark' ? '#000000' : '#F2F2F7',
    text: theme == 'dark' ? '#FFFFFF' : '#000000',
    foreground: theme == 'dark' ? '#1C1C1E' : '#FFFFFF',
    divider: theme == 'dark' ? '#363638' : '#DFDFEC',
    subtext: theme == 'dark' ? '#919199' : '#75758A',
    accent: '#0091FF',
    buttonText: '#FFFFFF'
  }
}

export default function styles() {
  return StyleSheet.create({
  colors: {
    background: Colors().background,
    text: Colors().text,
    foreground: Colors().foreground,
    divider: Colors().divider,
    subtext: Colors().subtext,
    accent: Colors().accent,
    buttonText: Colors().buttonText
  },

  // text
  title: {
    color: Colors().text,
    fontSize: 30,
    fontWeight: 700,
  },
  header: {
    color: Colors().text,
    fontSize: 24,
  },
  text: {
    color: Colors().text,
    fontSize: 16
  },
  subtext: {
    color: Colors().subtext,
    fontSize: 14
  },
  accentHeader: {
    color: Colors().text,
    fontSize: 24,
    fontWeight: 700,
  },
  accentText: {
    color: Colors().text,
    fontSize: 16,
    fontWeight: 700,
  },
  accentSubtext: {
    color: Colors().subtext,
    fontSize: 14,
    fontWeight: 700,
  },
  textHorizontalMargins: {
    marginLeft: 20,
    marginRight: 20
  },


  // interface
  safe_area: {
    flex: 1,
    backgroundColor: Colors().background
  },
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors().background
  },
  card: {
    padding: 0,
    borderRadius: 30,
    backgroundColor: Colors().foreground,
    minHeight: 45
  },
  card_element: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  input: {
    placeholderTextColor: Colors().subtext,
    color: Colors().text,
    fontSize: 16
  },
  divider: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 20,
    borderColor: Colors().divider,
    borderBottomWidth: 1
  },

  // buttons
  smallButton: {
    color: Colors().accent,
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: 700,
  },
  bigButton: {
    backgroundColor: Colors().accent,
    alignSelf: 'center',
    alignItems: 'center',
    width: 180,
    height: 50,
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bigButtonText: {
    color: Colors().buttonText,
    fontWeight: 700,
    fontSize: 16
  },
  slimButton: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    height: 35,
    borderRadius: 30,
  },
  slimButtonText: {
    fontWeight: 700,
    textAlign: 'center',
    fontSize: 16
  },
  backButton: {
    backgroundColor: Colors().foreground,
    width: 40,
    height: 40,
    borderRadius: 100,
    padding: 10,
    paddingLeft: 14,
    paddingTop: 11
  },
  backButtonIcon: {
    color: Colors().text,
    fontSize: 18
  },

  // alignment
  gap15: {
    gap: 15
  },
  gap10: {
    gap: 10
  },
  gap5: {
    gap: 5
  },
  scrollPadding: {
    paddingBottom: 40
  },
  space_between: {
    flex: 1,
    justifyContent: 'space-between',
  },
  horizontal: {
    flexDirection: 'row'
  },
  centerVertical: {
    alignItems: 'center'
  },
  alignRight: {
    alignItems: 'end',
    alignSelf: 'flex-end'
  },

  // extras
  logo: {
    marginTop: 25,
    marginBottom: 35,
    alignSelf: 'center',
    height: 225,
    width: '100%',
    resizeMode:'contain'
  },
  pfp: {
    height: 70,
    width: 70,
    resizeMode:'contain'
  }
})}