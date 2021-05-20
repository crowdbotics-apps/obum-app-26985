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
      <View style={styles.View_301_212}>
        <View style={styles.View_I301_212_301_10}>
          <View style={styles.View_I301_212_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/6ae5/37bf546194989d63627a392d13125a38"
            }}
            style={styles.ImageBackground_I301_212_301_12}
          />
          <View style={styles.View_I301_212_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88a/ded7/f41dec7843b5fcad7f7bdcd0d1fba7b9"
          }}
          style={styles.ImageBackground_I301_212_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7587/2345/81cfec30b2ed2737e555bd1c76f92635"
          }}
          style={styles.ImageBackground_I301_212_301_18}
        />
        <View style={styles.View_I301_212_301_23}>
          <View style={styles.View_I301_212_301_24}>
            <Text style={styles.Text_I301_212_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_301_213}>
        <Text style={styles.Text_301_213}>
          Got it, please confirm the number
        </Text>
      </View>
      <View style={styles.View_301_214}>
        <Text style={styles.Text_301_214}>
          You will get a confirmation code via SMS to your number, please enter
          the code below in order to continue:
        </Text>
      </View>
      <View style={styles.View_301_215}>
        <View style={styles.View_301_216}>
          <View style={styles.View_301_217} />
        </View>
        <View style={styles.View_301_218}>
          <View style={styles.View_301_219} />
        </View>
        <View style={styles.View_301_220}>
          <View style={styles.View_301_221}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6580/1c8e/60a915b45b56b1237287cb327691a694"
              }}
              style={styles.ImageBackground_301_222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3e/483d/f61114dc40b5ceee9a4ec60b337e0aa2"
              }}
              style={styles.ImageBackground_301_229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_301_230}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_301_231}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_301_232}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_301_233}
            />
          </View>
          <View style={styles.View_301_234}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad17/0c4a/9ceb278392c63da00b10077ab28c9249"
              }}
              style={styles.ImageBackground_301_235}
            />
            <View style={styles.View_301_236}>
              <Text style={styles.Text_301_236}>0</Text>
            </View>
          </View>
          <View style={styles.View_301_237}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_301_238}
            />
            <View style={styles.View_301_239}>
              <Text style={styles.Text_301_239}>WXYZ</Text>
            </View>
            <View style={styles.View_301_240}>
              <Text style={styles.Text_301_240}>9</Text>
            </View>
          </View>
          <View style={styles.View_301_241}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_301_242}
            />
            <View style={styles.View_301_243}>
              <Text style={styles.Text_301_243}>TUV</Text>
            </View>
            <View style={styles.View_301_244}>
              <Text style={styles.Text_301_244}>8</Text>
            </View>
          </View>
          <View style={styles.View_301_245}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_301_246}
            />
            <View style={styles.View_301_247}>
              <Text style={styles.Text_301_247}>PQRS</Text>
            </View>
            <View style={styles.View_301_248}>
              <Text style={styles.Text_301_248}>7</Text>
            </View>
          </View>
          <View style={styles.View_301_249}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_301_250}
            />
            <View style={styles.View_301_251}>
              <Text style={styles.Text_301_251}>MNO</Text>
            </View>
            <View style={styles.View_301_252}>
              <Text style={styles.Text_301_252}>6</Text>
            </View>
          </View>
          <View style={styles.View_301_253}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_301_254}
            />
            <View style={styles.View_301_255}>
              <Text style={styles.Text_301_255}>JKL</Text>
            </View>
            <View style={styles.View_301_256}>
              <Text style={styles.Text_301_256}>5</Text>
            </View>
          </View>
          <View style={styles.View_301_257}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_301_258}
            />
            <View style={styles.View_301_259}>
              <Text style={styles.Text_301_259}>GHI</Text>
            </View>
            <View style={styles.View_301_260}>
              <Text style={styles.Text_301_260}>4</Text>
            </View>
          </View>
          <View style={styles.View_301_261}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad17/0c4a/9ceb278392c63da00b10077ab28c9249"
              }}
              style={styles.ImageBackground_301_262}
            />
            <View style={styles.View_301_263}>
              <Text style={styles.Text_301_263}>DEF</Text>
            </View>
            <View style={styles.View_301_264}>
              <Text style={styles.Text_301_264}>3</Text>
            </View>
          </View>
          <View style={styles.View_301_265}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad17/0c4a/9ceb278392c63da00b10077ab28c9249"
              }}
              style={styles.ImageBackground_301_266}
            />
            <View style={styles.View_301_267}>
              <Text style={styles.Text_301_267}>ABC</Text>
            </View>
            <View style={styles.View_301_268}>
              <Text style={styles.Text_301_268}>2</Text>
            </View>
          </View>
          <View style={styles.View_301_269}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad17/0c4a/9ceb278392c63da00b10077ab28c9249"
              }}
              style={styles.ImageBackground_301_270}
            />
            <View style={styles.View_301_271}>
              <Text style={styles.Text_301_271}> </Text>
            </View>
            <View style={styles.View_301_272}>
              <Text style={styles.Text_301_272}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_301_273} />
      <View style={styles.View_301_274} />
      <View style={styles.View_301_275} />
      <View style={styles.View_301_276} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_301_212: {
    width: wp("100%"),
    height: hp("6.632749630453808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_212_301_10: {
    flexGrow: 1,
    width: wp("6.487476883303141%"),
    height: hp("1.7084356214179368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68889171950482%"),
    top: hp("2.6129050332991803%")
  },
  View_I301_212_301_11: {
    width: wp("5.866657938934178%"),
    height: hp("1.7084356214179368%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I301_212_301_12: {
    width: wp("0.35415133416364736%"),
    height: hp("0.602977262820051%"),
    top: hp("0.5527183657786883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133325549139499%")
  },
  View_I301_212_301_13: {
    width: wp("4.800002240904287%"),
    height: hp("1.1054586191646387%"),
    top: hp("0.30147364882172134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333352204106347%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I301_212_301_14: {
    flexGrow: 1,
    width: wp("4.088876328030646%"),
    height: hp("1.6581905344144894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666996905193%"),
    top: hp("2.6125048027663933%")
  },
  ImageBackground_I301_212_301_18: {
    flexGrow: 1,
    width: wp("4.533334630698974%"),
    height: hp("1.6079412783429923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39998254453504%"),
    top: hp("2.6631339651639343%")
  },
  View_I301_212_301_23: {
    flexGrow: 1,
    width: wp("14.400001194166101%"),
    height: hp("3.165630434380203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599990328728865%"),
    top: hp("1.055207799692623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_212_301_24: {
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147541%")
  },
  Text_I301_212_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_301_213: {
    width: wp("74.66667285863903%"),
    top: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%")
  },
  Text_301_213: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_214: {
    width: wp("80.79999840777853%"),
    top: hp("27.133962495730874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600004481808574%")
  },
  Text_301_214: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_301_215: {
    width: wp("100%"),
    height: hp("43.86658381894638%"),
    top: hp("78.53777108948088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_301_216: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("43.86658381894638%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_217: {
    width: wp("100%"),
    height: hp("43.86658381894638%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_301_218: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.125306343120304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.741281644894116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_219: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("3.415300546448094%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_301_220: {
    flexGrow: 1,
    width: wp("96.8000034203276%"),
    height: hp("31.204065208226606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.600005661231884%"),
    top: hp("0.9044542990095579%")
  },
  View_301_221: {
    width: wp("6.400015273531853%"),
    height: hp("2.7125728586332394%"),
    top: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66665015474032%")
  },
  ImageBackground_301_222: {
    width: wp("6.400015273531853%"),
    height: hp("2.7125728586332394%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_301_229: {
    width: wp("1.8888980294195352%"),
    height: hp("1.0671229961791324%"),
    top: hp("0.8219401041666572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9251172346769323%")
  },
  ImageBackground_301_230: {
    width: wp("0.31889394861488524%"),
    height: hp("0.1802725870101178%"),
    top: hp("0.7943909024931628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.540425913345416%")
  },
  ImageBackground_301_231: {
    width: wp("0.3190708621112621%"),
    height: hp("0.18026841794206797%"),
    top: hp("1.7338987256659806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8782351581370875%")
  },
  ImageBackground_301_232: {
    width: wp("0.31890132001056765%"),
    height: hp("0.1804685332084614%"),
    top: hp("1.733965430754779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.54316807253926%")
  },
  ImageBackground_301_233: {
    width: wp("0.31889394861488524%"),
    height: hp("0.1804685332084614%"),
    top: hp("0.7944242550375549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.881154230827306%")
  },
  View_301_234: {
    width: wp("31.200003508784345%"),
    height: hp("6.934235786479678%"),
    top: hp("24.269846098019116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.79999811292271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_235: {
    width: wp("31.200003508784345%"),
    height: hp("6.934235786479678%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_236: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("1.0552077996926243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_237: {
    width: wp("31.199999823086504%"),
    height: hp("7.084980949026639%"),
    top: hp("16.129623996755456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.5999962258454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_238: {
    width: wp("31.199999823086504%"),
    height: hp("7.084980949026639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_239: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.46660609844605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_239: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_301_240: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1540220500341576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_241: {
    width: wp("31.200003508784345%"),
    height: hp("7.084980949026639%"),
    top: hp("16.129623996755456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.79999811292271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_242: {
    width: wp("31.200003508784345%"),
    height: hp("7.084980949026639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_243: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.46660609844605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_301_244: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1540220500341576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_244: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_245: {
    width: wp("31.200003508784345%"),
    height: hp("7.084980949026639%"),
    top: hp("16.129623996755456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_246: {
    width: wp("31.200003508784345%"),
    height: hp("7.084980949026639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_247: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.46660609844605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_301_248: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1540220500341576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_249: {
    width: wp("31.199999823086504%"),
    height: hp("7.084980949026639%"),
    top: hp("7.989435248036202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.5999962258454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_250: {
    width: wp("31.199999823086504%"),
    height: hp("7.084980949026639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_251: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.466606098446036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_301_252: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1540220500341576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_253: {
    width: wp("31.200003508784345%"),
    height: hp("7.084980949026639%"),
    top: hp("7.989435248036202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.79999811292271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_254: {
    width: wp("31.200003508784345%"),
    height: hp("7.084980949026639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_255: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.466606098446036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_255: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_301_256: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1540220500341576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_256: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_257: {
    width: wp("31.200003508784345%"),
    height: hp("7.084980949026639%"),
    top: hp("7.989435248036202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_258: {
    width: wp("31.200003508784345%"),
    height: hp("7.084980949026639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_259: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.466606098446036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_259: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_301_260: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1540220500341576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_261: {
    width: wp("31.199999823086504%"),
    height: hp("6.934236307613186%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.5999962258454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_262: {
    width: wp("31.199999823086504%"),
    height: hp("6.934236307613186%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_263: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_301_264: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.15075350068305227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_264: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_265: {
    width: wp("31.200003508784345%"),
    height: hp("6.934236307613186%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.79999811292271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_266: {
    width: wp("31.200003508784345%"),
    height: hp("6.934236307613186%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_267: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_301_268: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.15075350068305227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_269: {
    width: wp("31.200003508784345%"),
    height: hp("6.934236307613186%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_270: {
    width: wp("31.200003508784345%"),
    height: hp("6.934236307613186%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_271: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_301_272: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.15075350068305227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_273: {
    width: wp("16.000001326851223%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600004481808574%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_274: {
    width: wp("16.000001326851223%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333380510265%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_275: {
    width: wp("15.999999484002302%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86665440066425%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_276: {
    width: wp("16.000005012549064%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.40001320954107%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
