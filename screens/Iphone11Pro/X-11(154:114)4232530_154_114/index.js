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
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("322_562"))
        }
      >
        <View style={styles.View_207_73} />
      </TouchableOpacity>
      <View style={styles.View_154_116}>
        <Text style={styles.Text_154_116}>Write your feedback.....</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("311_810"))
        }
      >
        <View style={styles.View_154_221}>
          <View style={styles.View_154_224}>
            <Text style={styles.Text_154_224}>Send feedback</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_204_0} />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("154_78"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfa2/056b/e6496a95d313ead41e1555c64981dc3c"
          }}
          style={styles.ImageBackground_204_1}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_207_73: {
    width: wp("88.16425120772948%"),
    minWidth: wp("88.16425120772948%"),
    height: hp("43.169398907103826%"),
    minHeight: hp("43.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("12.841530054644808%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_154_116: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("16.39344262295082%")
  },
  Text_154_116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_154_221: {
    width: wp("88.16425120772948%"),
    minWidth: wp("88.16425120772948%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("60.38251366120219%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    overflow: "hidden"
  },
  View_154_224: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.864734299516904%"),
    top: hp("0.8879781420765056%")
  },
  Text_154_224: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_0: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-119.56521739130434%"),
    top: hp("8.60655737704918%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_204_1: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-119.56521739130434%"),
    top: hp("9.562841530054644%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
