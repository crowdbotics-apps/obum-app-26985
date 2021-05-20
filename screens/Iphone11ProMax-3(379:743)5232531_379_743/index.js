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
      <View style={styles.View_379_746} />
      <View style={styles.View_379_747} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30b8/cccb/94d324f39a2099c98d6833355dcd252a"
        }}
        style={styles.ImageBackground_379_753}
      />
      <View style={styles.View_379_754}>
        <View style={styles.View_379_755}>
          <Text style={styles.Text_379_755}>Login</Text>
        </View>
      </View>
      <View style={styles.View_379_739} />
      <View style={styles.View_379_758}>
        <Text style={styles.Text_379_758}>Password</Text>
      </View>
      <View style={styles.View_311_814}>
        <Text style={styles.Text_311_814}>Email</Text>
      </View>
      <View style={styles.View_379_764}>
        <Text style={styles.Text_379_764}>Sign up</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_379_746: {
    flexGrow: 1,
    width: wp("90.33816425120773%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("72.6775956284153%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(199, 199, 199, 1)",
    borderWidth: 1
  },
  View_379_747: {
    width: wp("17.391304347826086%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.30434782608695%"),
    top: hp("44.26229508196721%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_379_753: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("75.27322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.78260869565217%")
  },
  View_379_754: {
    flexGrow: 1,
    width: wp("90.33816425120773%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("84.8360655737705%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    overflow: "hidden"
  },
  View_379_755: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.251207729468604%"),
    top: hp("2.868852459016381%")
  },
  Text_379_755: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_379_739: {
    flexGrow: 1,
    width: wp("90.33816425120773%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("61.20218579234973%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(199, 199, 199, 1)",
    borderWidth: 1
  },
  View_379_758: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("74.31693989071039%")
  },
  Text_379_758: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_311_814: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("62.841530054644814%")
  },
  Text_311_814: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_379_764: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.028985507246375%"),
    top: hp("99.31693989071039%")
  },
  Text_379_764: {
    color: "rgba(50, 201, 249, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
