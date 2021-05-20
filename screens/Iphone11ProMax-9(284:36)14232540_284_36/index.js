import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_284_68}>
        <Text style={styles.Text_284_68}>World Citizen</Text>
      </View>
      <View style={styles.View_284_69}>
        <Text style={styles.Text_284_69}>Donation Platform</Text>
      </View>
      <View style={styles.View_284_70} />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("301_41"))
        }
      >
        <View style={styles.View_284_71}>
          <Text style={styles.Text_284_71}>Get Started</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0438/3b85/e7c8f6bfc487f501e13ccdc42e616ab6"
        }}
        style={styles.ImageBackground_287_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfcf/71e2/5cb9e7ad73ee49ea3523a32f077dec99"
        }}
        style={styles.ImageBackground_288_36}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_284_68: {
    width: wp("64.00966183574879%"),
    minWidth: wp("64.00966183574879%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.396135265700483%"),
    top: hp("45.3551912568306%")
  },
  Text_284_68: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_284_69: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.806763285024154%"),
    top: hp("50.27322404371585%")
  },
  Text_284_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_284_70: {
    width: wp("74.8792270531401%"),
    minWidth: wp("74.8792270531401%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(50, 201, 249, 1)"
  },
  View_284_71: {
    width: wp("40.33816425120773%"),
    minWidth: wp("40.33816425120773%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.951690821256037%"),
    top: hp("98.90710382513662%")
  },
  Text_284_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_287_2: {
    width: wp("36.231884057971016%"),
    minWidth: wp("36.231884057971016%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("16.80327868852459%"),
    resizeMode: "cover"
  },
  ImageBackground_288_36: {
    width: wp("76.08695652173914%"),
    height: hp("21.994535519125684%"),
    top: hp("62.158469945355186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
