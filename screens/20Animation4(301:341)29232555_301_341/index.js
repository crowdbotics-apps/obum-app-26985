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
      <View style={styles.View_301_342} />
      <View style={styles.View_301_343}>
        <View style={styles.View_I301_343_301_10}>
          <View style={styles.View_I301_343_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829b/7bad/33d4cb76ec1c716994f7048664a38f99"
            }}
            style={styles.ImageBackground_I301_343_301_12}
          />
          <View style={styles.View_I301_343_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63da/9de2/df46b9f1625dd033ce448a4c60604051"
          }}
          style={styles.ImageBackground_I301_343_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8eb/375f/90cc1223413e2d61ac4d0e2a87f54607"
          }}
          style={styles.ImageBackground_I301_343_301_18}
        />
        <View style={styles.View_I301_343_301_23}>
          <View style={styles.View_I301_343_301_24}>
            <Text style={styles.Text_I301_343_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/371b/c4d7/c13c39a8e42caa9439840c56f42749c4"
        }}
        style={styles.ImageBackground_301_344}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("111.47540983606557%") },
  View_301_342: {
    width: wp("100%"),
    height: hp("111.47540983606557%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(50, 201, 249, 1)"
  },
  View_301_343: {
    width: wp("110.39999994102882%"),
    height: hp("6.665423137894094%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_343_301_10: {
    flexGrow: 1,
    width: wp("7.162173358714523%"),
    height: hp("1.7168514064100922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99.01653787364131%"),
    top: hp("2.6257791154371586%")
  },
  View_I301_343_301_11: {
    width: wp("6.476788359563708%"),
    height: hp("1.7168514064100922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I301_343_301_12: {
    width: wp("0.3909788269927536%"),
    height: hp("0.6059474632388256%"),
    top: hp("0.5554532744193987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.771187160326065%")
  },
  View_I301_343_301_13: {
    width: wp("5.299200527909873%"),
    height: hp("1.1109042037380197%"),
    top: hp("0.30297451331967196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5888270871074752%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I301_343_301_14: {
    flexGrow: 1,
    width: wp("4.5141178628672725%"),
    height: hp("1.6663590415579375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.03043383907004%"),
    top: hp("2.625362208632172%")
  },
  ImageBackground_I301_343_301_18: {
    flexGrow: 1,
    width: wp("5.004801727147494%"),
    height: hp("1.6158622470709796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.55363073671496%"),
    top: hp("2.676258191384904%")
  },
  View_I301_343_301_23: {
    flexGrow: 1,
    width: wp("15.8975997408807%"),
    height: hp("3.181224572853964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.182419044384058%"),
    top: hp("1.0604107966188525%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_343_301_24: {
    width: wp("15.8975997408807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054642%")
  },
  Text_I301_343_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_301_344: {
    width: wp("74.93333309744867%"),
    height: hp("85.8031225986168%"),
    top: hp("-35.55681405823087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5333187084843%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
