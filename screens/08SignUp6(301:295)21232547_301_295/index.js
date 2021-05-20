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
      <View style={styles.View_301_296}>
        <View style={styles.View_I301_296_301_10}>
          <View style={styles.View_I301_296_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/6ae5/37bf546194989d63627a392d13125a38"
            }}
            style={styles.ImageBackground_I301_296_301_12}
          />
          <View style={styles.View_I301_296_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88a/ded7/f41dec7843b5fcad7f7bdcd0d1fba7b9"
          }}
          style={styles.ImageBackground_I301_296_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7587/2345/81cfec30b2ed2737e555bd1c76f92635"
          }}
          style={styles.ImageBackground_I301_296_301_18}
        />
        <View style={styles.View_I301_296_301_23}>
          <View style={styles.View_I301_296_301_24}>
            <Text style={styles.Text_I301_296_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_301_297}>
        <Text style={styles.Text_301_297}>
          Got it, please confirm the number
        </Text>
      </View>
      <View style={styles.View_301_298}>
        <Text style={styles.Text_301_298}>
          You will get a confirmation code via SMS to your number, please enter
          the code below in order to continue:
        </Text>
      </View>
      <View style={styles.View_301_299}>
        <View style={styles.View_I301_299_301_216}>
          <View style={styles.View_I301_299_301_217} />
        </View>
        <View style={styles.View_I301_299_301_218}>
          <View style={styles.View_I301_299_301_219} />
        </View>
        <View style={styles.View_I301_299_301_220}>
          <View style={styles.View_I301_299_301_221}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6580/1c8e/60a915b45b56b1237287cb327691a694"
              }}
              style={styles.ImageBackground_I301_299_301_222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3e/483d/f61114dc40b5ceee9a4ec60b337e0aa2"
              }}
              style={styles.ImageBackground_I301_299_301_229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_I301_299_301_230}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_I301_299_301_231}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_I301_299_301_232}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_I301_299_301_233}
            />
          </View>
          <View style={styles.View_I301_299_301_234}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9de/e63a/78e31528f9485ba524cc8f419bee1125"
              }}
              style={styles.ImageBackground_I301_299_301_235}
            />
            <View style={styles.View_I301_299_301_236}>
              <Text style={styles.Text_I301_299_301_236}>0</Text>
            </View>
          </View>
          <View style={styles.View_I301_299_301_237}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_I301_299_301_238}
            />
            <View style={styles.View_I301_299_301_239}>
              <Text style={styles.Text_I301_299_301_239}>WXYZ</Text>
            </View>
            <View style={styles.View_I301_299_301_240}>
              <Text style={styles.Text_I301_299_301_240}>9</Text>
            </View>
          </View>
          <View style={styles.View_I301_299_301_241}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_I301_299_301_242}
            />
            <View style={styles.View_I301_299_301_243}>
              <Text style={styles.Text_I301_299_301_243}>TUV</Text>
            </View>
            <View style={styles.View_I301_299_301_244}>
              <Text style={styles.Text_I301_299_301_244}>8</Text>
            </View>
          </View>
          <View style={styles.View_I301_299_301_245}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_I301_299_301_246}
            />
            <View style={styles.View_I301_299_301_247}>
              <Text style={styles.Text_I301_299_301_247}>PQRS</Text>
            </View>
            <View style={styles.View_I301_299_301_248}>
              <Text style={styles.Text_I301_299_301_248}>7</Text>
            </View>
          </View>
          <View style={styles.View_I301_299_301_249}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_I301_299_301_250}
            />
            <View style={styles.View_I301_299_301_251}>
              <Text style={styles.Text_I301_299_301_251}>MNO</Text>
            </View>
            <View style={styles.View_I301_299_301_252}>
              <Text style={styles.Text_I301_299_301_252}>6</Text>
            </View>
          </View>
          <View style={styles.View_I301_299_301_253}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_I301_299_301_254}
            />
            <View style={styles.View_I301_299_301_255}>
              <Text style={styles.Text_I301_299_301_255}>JKL</Text>
            </View>
            <View style={styles.View_I301_299_301_256}>
              <Text style={styles.Text_I301_299_301_256}>5</Text>
            </View>
          </View>
          <View style={styles.View_I301_299_301_257}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/fafd/9163c59275b5eb6a42f4f8734f07cc09"
              }}
              style={styles.ImageBackground_I301_299_301_258}
            />
            <View style={styles.View_I301_299_301_259}>
              <Text style={styles.Text_I301_299_301_259}>GHI</Text>
            </View>
            <View style={styles.View_I301_299_301_260}>
              <Text style={styles.Text_I301_299_301_260}>4</Text>
            </View>
          </View>
          <View style={styles.View_I301_299_301_261}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9de/e63a/78e31528f9485ba524cc8f419bee1125"
              }}
              style={styles.ImageBackground_I301_299_301_262}
            />
            <View style={styles.View_I301_299_301_263}>
              <Text style={styles.Text_I301_299_301_263}>DEF</Text>
            </View>
            <View style={styles.View_I301_299_301_264}>
              <Text style={styles.Text_I301_299_301_264}>3</Text>
            </View>
          </View>
          <View style={styles.View_I301_299_301_265}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9de/e63a/78e31528f9485ba524cc8f419bee1125"
              }}
              style={styles.ImageBackground_I301_299_301_266}
            />
            <View style={styles.View_I301_299_301_267}>
              <Text style={styles.Text_I301_299_301_267}>ABC</Text>
            </View>
            <View style={styles.View_I301_299_301_268}>
              <Text style={styles.Text_I301_299_301_268}>2</Text>
            </View>
          </View>
          <View style={styles.View_I301_299_301_269}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9de/e63a/78e31528f9485ba524cc8f419bee1125"
              }}
              style={styles.ImageBackground_I301_299_301_270}
            />
            <View style={styles.View_I301_299_301_271}>
              <Text style={styles.Text_I301_299_301_271}> </Text>
            </View>
            <View style={styles.View_I301_299_301_272}>
              <Text style={styles.Text_I301_299_301_272}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_301_300} />
      <View style={styles.View_301_301} />
      <View style={styles.View_301_302} />
      <View style={styles.View_301_303} />
      <View style={styles.View_301_304}>
        <View style={styles.View_I301_304_301_287}>
          <View style={styles.View_I301_304_301_288} />
        </View>
        <View style={styles.View_I301_304_301_289}>
          <View style={styles.View_I301_304_301_290} />
          <View style={styles.View_I301_304_301_291} />
          <View style={styles.View_I301_304_301_292}>
            <Text style={styles.Text_I301_304_301_292}>From Messages 1806</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad2/e2d6/ae743c11265e3b7eca2fe2a66e8ed838"
          }}
          style={styles.ImageBackground_I301_304_301_293}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad2/e2d6/ae743c11265e3b7eca2fe2a66e8ed838"
          }}
          style={styles.ImageBackground_I301_304_301_294}
        />
      </View>
      <View style={styles.View_301_305}>
        <Text style={styles.Text_301_305}>1</Text>
      </View>
      <View style={styles.View_301_306}>
        <Text style={styles.Text_301_306}>8</Text>
      </View>
      <View style={styles.View_301_307}>
        <Text style={styles.Text_301_307}>0</Text>
      </View>
      <View style={styles.View_301_308}>
        <Text style={styles.Text_301_308}>6</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_301_296: {
    width: wp("100%"),
    height: hp("6.632749630453808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_296_301_10: {
    flexGrow: 1,
    width: wp("6.487476883303141%"),
    height: hp("1.7084356214179368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68889171950482%"),
    top: hp("2.6129050332991803%")
  },
  View_I301_296_301_11: {
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
  ImageBackground_I301_296_301_12: {
    width: wp("0.35415133416364736%"),
    height: hp("0.602977262820051%"),
    top: hp("0.5527183657786883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133325549139499%")
  },
  View_I301_296_301_13: {
    width: wp("4.800002240904287%"),
    height: hp("1.1054586191646387%"),
    top: hp("0.30147364882172134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333352204106347%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I301_296_301_14: {
    flexGrow: 1,
    width: wp("4.088876328030646%"),
    height: hp("1.6581905344144894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666996905193%"),
    top: hp("2.6125048027663933%")
  },
  ImageBackground_I301_296_301_18: {
    flexGrow: 1,
    width: wp("4.533334630698974%"),
    height: hp("1.6079412783429923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999728732639%"),
    top: hp("2.6631339651639343%")
  },
  View_I301_296_301_23: {
    flexGrow: 1,
    width: wp("14.400001194166101%"),
    height: hp("3.165630434380203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600005071520229%"),
    top: hp("1.055207799692623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_296_301_24: {
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147541%")
  },
  Text_I301_296_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_301_297: {
    width: wp("74.66667285863903%"),
    top: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%")
  },
  Text_301_297: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_298: {
    width: wp("80.79999840777853%"),
    top: hp("27.133962495730874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600004481808574%")
  },
  Text_301_298: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_301_299: {
    width: wp("100%"),
    height: hp("43.85245901639344%"),
    top: hp("78.55191256830601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_I301_299_301_216: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_299_301_217: {
    width: wp("100%"),
    height: hp("43.85245901639344%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I301_299_301_218: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.123655392172558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.72880779328892%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_299_301_219: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("3.4153005464481083%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_299_301_220: {
    flexGrow: 1,
    width: wp("96.8000034203276%"),
    height: hp("31.19401566969241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.600005661231884%"),
    top: hp("0.9041874786543787%")
  },
  View_I301_299_301_221: {
    width: wp("6.400015273531853%"),
    height: hp("2.711697354342768%"),
    top: hp("26.221070002988384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.6666648975317%")
  },
  ImageBackground_I301_299_301_222: {
    width: wp("6.400015273531853%"),
    height: hp("2.711697354342768%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I301_299_301_229: {
    width: wp("1.8888980294195352%"),
    height: hp("1.0667790480650188%"),
    top: hp("0.821673283811478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9251172346769323%")
  },
  ImageBackground_I301_299_301_230: {
    width: wp("0.31889394861488524%"),
    height: hp("0.1802163045914447%"),
    top: hp("0.7941240821379836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.540411170554037%")
  },
  ImageBackground_I301_299_301_231: {
    width: wp("0.3190708621112621%"),
    height: hp("0.1802121355233948%"),
    top: hp("1.7333317324112016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8782351581370733%")
  },
  ImageBackground_I301_299_301_232: {
    width: wp("0.31890132001056765%"),
    height: hp("0.18041225078978823%"),
    top: hp("1.7333984375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.543153329747881%")
  },
  ImageBackground_I301_299_301_233: {
    width: wp("0.31889394861488524%"),
    height: hp("0.1804101662557633%"),
    top: hp("0.7941907872267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8811689736186565%")
  },
  View_I301_299_301_234: {
    width: wp("31.200003508784345%"),
    height: hp("6.932005335073002%"),
    top: hp("24.262008250085387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.79999811292271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_235: {
    width: wp("31.200003508784345%"),
    height: hp("6.932005335073002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_236: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("1.0548742742486183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I301_299_301_237: {
    width: wp("31.199999823086504%"),
    height: hp("7.082700468803364%"),
    top: hp("16.124454352373633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.5999962258454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_238: {
    width: wp("31.199999823086504%"),
    height: hp("7.082700468803364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_239: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.465171939036878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_239: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I301_299_301_240: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1539886974897513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I301_299_301_241: {
    width: wp("31.200003508784345%"),
    height: hp("7.082700468803364%"),
    top: hp("16.124454352373633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.79999811292271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_242: {
    width: wp("31.200003508784345%"),
    height: hp("7.082700468803364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_243: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.465171939036878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I301_299_301_244: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1539886974897513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_244: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I301_299_301_245: {
    width: wp("31.200003508784345%"),
    height: hp("7.082700468803364%"),
    top: hp("16.124454352373633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_246: {
    width: wp("31.200003508784345%"),
    height: hp("7.082700468803364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_247: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.465171939036878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I301_299_301_248: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1539886974897513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I301_299_301_249: {
    width: wp("31.199999823086504%"),
    height: hp("7.082700468803364%"),
    top: hp("7.986867102117486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.5999962258454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_250: {
    width: wp("31.199999823086504%"),
    height: hp("7.082700468803364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_251: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.465171939036878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I301_299_301_252: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1539886974897513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I301_299_301_253: {
    width: wp("31.200003508784345%"),
    height: hp("7.082700468803364%"),
    top: hp("7.986867102117486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.79999811292271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_254: {
    width: wp("31.200003508784345%"),
    height: hp("7.082700468803364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_255: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.465171939036878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_255: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I301_299_301_256: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1539886974897513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_256: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I301_299_301_257: {
    width: wp("31.200003508784345%"),
    height: hp("7.082700468803364%"),
    top: hp("7.986867102117486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_258: {
    width: wp("31.200003508784345%"),
    height: hp("7.082700468803364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_259: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.465171939036878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_259: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I301_299_301_260: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1539886974897513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I301_299_301_261: {
    width: wp("31.199999823086504%"),
    height: hp("6.932003771672483%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.5999962258454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_262: {
    width: wp("31.199999823086504%"),
    height: hp("6.932003771672483%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_263: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.370183892588798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I301_299_301_264: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1506867955942539%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_264: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I301_299_301_265: {
    width: wp("31.200003508784345%"),
    height: hp("6.932003771672483%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.79999811292271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_266: {
    width: wp("31.200003508784345%"),
    height: hp("6.932003771672483%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_267: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.370183892588798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I301_299_301_268: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1506867955942539%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I301_299_301_269: {
    width: wp("31.200003508784345%"),
    height: hp("6.932003771672483%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_299_301_270: {
    width: wp("31.200003508784345%"),
    height: hp("6.932003771672483%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_299_301_271: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("4.370183892588798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I301_299_301_272: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    top: hp("0.1506867955942539%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_299_301_272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_301_300: {
    width: wp("16.000001326851223%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600004481808574%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_301: {
    width: wp("16.000001326851223%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333380510265%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_302: {
    width: wp("15.999999484002302%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866669143455617%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_303: {
    width: wp("16.000005012549064%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999846674971%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_304: {
    width: wp("108.69565217391303%"),
    height: hp("7.377049180327869%"),
    top: hp("71.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_304_301_287: {
    flexGrow: 1,
    width: wp("108.69565217391303%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_304_301_288: {
    width: wp("108.69565217391303%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I301_304_301_289: {
    flexGrow: 1,
    width: wp("71.01449275362319%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.260863668100846%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_304_301_290: {
    width: wp("71.01449275362319%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_304_301_291: {
    width: wp("71.01449275362319%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_304_301_292: {
    flexGrow: 1,
    width: wp("71.01449275362319%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I301_304_301_292: {
    color: "rgba(58, 59, 61, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I301_304_301_293: {
    flexGrow: 1,
    width: wp("0.48180697620778845%"),
    height: hp("3.2969847402937424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.30405297025966%"),
    top: hp("3.3377225281762293%")
  },
  ImageBackground_I301_304_301_294: {
    flexGrow: 1,
    width: wp("0.48180697620778845%"),
    height: hp("3.2969847402937424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.42482591711956%"),
    top: hp("3.3377225281762293%")
  },
  View_301_305: {
    width: wp("3.6231884057971016%"),
    top: hp("46.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.942028985507244%")
  },
  Text_301_305: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_306: {
    width: wp("3.4666678755755584%"),
    top: hp("46.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.231884057971016%")
  },
  Text_301_306: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_307: {
    width: wp("3.4666641898777177%"),
    top: hp("46.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.52173913043478%")
  },
  Text_301_307: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_308: {
    width: wp("3.4666641898777177%"),
    top: hp("46.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.81159420289855%")
  },
  Text_301_308: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
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
