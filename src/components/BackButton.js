import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from "../styles/Generic";

export default ({ navigation }) => {
  return (
    <Pressable style={styles().backButton} onPress={() => navigation.goBack()}>
      <MaterialIcons name="arrow-back-ios" style={styles().backButtonIcon} />
    </Pressable>
  )
}