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
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_327_25} />
      <View style={styles.View_327_26} />
      <View style={styles.View_327_27} />
      <View style={styles.View_327_28} />
      <View style={styles.View_327_29} />
      <View style={styles.View_327_30} />
      <View style={styles.View_327_31} />
      <View style={styles.View_327_32} />
      <View style={styles.View_327_33} />
      <View style={styles.View_327_34} />
      <View style={styles.View_327_35} />
      <View style={styles.View_327_36} />
      <View style={styles.View_327_37} />
      <View style={styles.View_327_38} />
      <View style={styles.View_327_39} />
      <View style={styles.View_327_40} />
      <View style={styles.View_327_41} />
      <View style={styles.View_327_42} />
      <View style={styles.View_327_43} />
      <View style={styles.View_327_44} />
      <View style={styles.View_327_45} />
      <View style={styles.View_327_46} />
      <View style={styles.View_327_47} />
      <View style={styles.View_327_48} />
      <View style={styles.View_327_49} />
      <View style={styles.View_327_50} />
      <View style={styles.View_327_51} />
      <View style={styles.View_327_52} />
      <View style={styles.View_327_53} />
      <View style={styles.View_327_54} />
      <View style={styles.View_327_55} />
      <View style={styles.View_327_56} />
      <View style={styles.View_327_57} />
      <View style={styles.View_327_58} />
      <View style={styles.View_327_59}>
        <Text style={styles.Text_327_59}>ShadeCard</Text>
      </View>
      <View style={styles.View_327_60}>
        <Text style={styles.Text_327_60}>Product of Laxmi PrintArt</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd682863-56ef-4cd7-bded-98ddb1e61047"
        }}
        style={styles.ImageBackground_327_61}
      />
      <View style={styles.View_327_62} />
      <View style={styles.View_327_63} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31b99deb-a71d-42eb-817b-56a2dd5d30b9"
        }}
        style={styles.ImageBackground_327_64}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd5886f0-b1e0-49d3-83d9-41ec88bdcda2"
        }}
        style={styles.ImageBackground_327_65}
      />
      <View style={styles.View_327_66}>
        <Text style={styles.Text_327_66}>Standard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24b54172-a15a-4e06-bb3c-27e8dd21629d"
        }}
        style={styles.ImageBackground_327_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8516eb2f-dcde-4f26-b661-40022f4e7c12"
        }}
        style={styles.ImageBackground_327_68}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb13e16c-2c66-404c-85d0-662f58494c01"
        }}
        style={styles.ImageBackground_327_69}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abf97c45-b821-44e0-b478-21db26d2ad25"
        }}
        style={styles.ImageBackground_327_70}
      />
      <View style={styles.View_327_71}>
        <Text style={styles.Text_327_71}>Dark</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5c408e4-a3d5-4c13-8401-a43ef71e532f"
        }}
        style={styles.ImageBackground_327_72}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b80d5ba-59ff-46d7-8a19-a0edef6c256f"
        }}
        style={styles.ImageBackground_327_73}
      />
      <View style={styles.View_327_74}>
        <Text style={styles.Text_327_74}>Front</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0818cb0c-f8b4-4db2-9a1e-380ab08be1ea"
        }}
        style={styles.ImageBackground_327_75}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/490c4b4c-4689-407a-86e7-47c5e1b0d693"
        }}
        style={styles.ImageBackground_327_76}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21dce8d6-ed95-469d-8dd6-366b0cb7b7a6"
        }}
        style={styles.ImageBackground_327_77}
      />
      <View style={styles.View_327_78}>
        <Text style={styles.Text_327_78}>Back</Text>
      </View>
      <View style={styles.View_327_79} />
      <View style={styles.View_327_80}>
        <Text style={styles.Text_327_80}>Choose PDF File</Text>
      </View>
      <View style={styles.View_327_81}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a03149-1a39-4e61-980f-e02695dccd46"
          }}
          style={styles.ImageBackground_327_82}
        />
        <View style={styles.View_327_83} />
      </View>
      <View style={styles.View_327_84} />
      <View style={styles.View_327_85}>
        <View style={styles.View_327_86}>
          <Text style={styles.Text_327_86}>Choose PDF File</Text>
        </View>
        <View style={styles.View_327_87}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efb3489b-fdb4-4a96-bf5b-6f764510cc8b"
            }}
            style={styles.ImageBackground_327_88}
          />
          <View style={styles.View_327_89} />
        </View>
      </View>
      <View style={styles.View_327_90}>
        <View style={styles.View_327_91} />
        <View style={styles.View_327_92}>
          <View style={styles.View_327_93} />
          <View style={styles.View_327_94}>
            <Text style={styles.Text_327_94}>Choose PDF File</Text>
          </View>
          <View style={styles.View_327_95}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a95326b-c3b2-49c4-b30c-0cc29b0f091a"
              }}
              style={styles.ImageBackground_327_96}
            />
            <View style={styles.View_327_97} />
          </View>
        </View>
      </View>
      <View style={styles.View_327_98}>
        <Text style={styles.Text_327_98}>Light</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29ee3e1b-1528-4f5a-a96b-4ad69cbc33d4"
        }}
        style={styles.ImageBackground_327_99}
      />
      <View style={styles.View_327_100}>
        <Text style={styles.Text_327_100}>Cipla Info</Text>
      </View>
      <View style={styles.View_327_101}>
        <View style={styles.View_327_102} />
        <View style={styles.View_327_103}>
          <Text style={styles.Text_327_103}>Select Design</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/428faa8c-3be4-4dba-9ca2-01077898e163"
          }}
          style={styles.ImageBackground_327_104}
        />
      </View>
      <View style={styles.View_327_105}>
        <View style={styles.View_327_106} />
        <View style={styles.View_327_107}>
          <Text style={styles.Text_327_107}>Save</Text>
        </View>
      </View>
      <View style={styles.View_327_108} />
      <View style={styles.View_327_109}>
        <Text style={styles.Text_327_109}>Merge &amp; Download</Text>
      </View>
      <View style={styles.View_327_110}>
        <View style={styles.View_327_111}>
          <Text style={styles.Text_327_111}>Select File Path:</Text>
        </View>
        <View style={styles.View_327_112} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7fede96-eb33-4aaf-833d-c69b39830a10"
          }}
          style={styles.ImageBackground_327_113}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/394347b3-5a96-4482-97fb-3a344fb55df3"
          }}
          style={styles.ImageBackground_327_114}
        />
      </View>
      <View style={styles.View_327_115}>
        <Text style={styles.Text_327_115}>Select “Artist Path” File:</Text>
      </View>
      <View style={styles.View_327_116}>
        <Text style={styles.Text_327_116}>Customize Input Table:</Text>
      </View>
      <View style={styles.View_327_117}>
        <Text style={styles.Text_327_117}>Select Shades</Text>
      </View>
      <View style={styles.View_327_118} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e16d3ccf-e017-4a1d-accd-d1b446e2c2bd"
        }}
        style={styles.ImageBackground_327_119}
      />
      <View style={styles.View_327_120}>
        <Text style={styles.Text_327_120}>Settings</Text>
      </View>
      <View style={styles.View_327_121}>
        <View style={styles.View_327_122} />
        <View style={styles.View_327_123} />
        <View style={styles.View_327_124} />
        <View style={styles.View_327_125} />
        <View style={styles.View_327_126} />
        <View style={styles.View_327_127} />
        <View style={styles.View_327_128} />
        <View style={styles.View_327_129} />
        <View style={styles.View_327_130} />
        <View style={styles.View_327_131} />
        <View style={styles.View_327_132} />
        <View style={styles.View_327_133} />
        <View style={styles.View_327_134} />
        <View style={styles.View_327_135} />
        <View style={styles.View_327_136} />
        <View style={styles.View_327_137} />
        <View style={styles.View_327_138} />
        <View style={styles.View_327_139} />
        <View style={styles.View_327_140} />
        <View style={styles.View_327_141} />
        <View style={styles.View_327_142} />
        <View style={styles.View_327_143} />
        <View style={styles.View_327_144} />
        <View style={styles.View_327_145} />
        <View style={styles.View_327_146} />
        <View style={styles.View_327_147} />
        <View style={styles.View_327_148} />
        <View style={styles.View_327_149} />
        <View style={styles.View_327_150} />
        <View style={styles.View_327_151} />
        <View style={styles.View_327_152} />
        <View style={styles.View_327_153} />
        <View style={styles.View_327_154} />
        <View style={styles.View_327_155} />
        <View style={styles.View_327_156} />
        <View style={styles.View_327_157} />
        <View style={styles.View_327_158} />
        <View style={styles.View_327_159} />
        <View style={styles.View_327_160}>
          <Text style={styles.Text_327_160}>Lab Value - L</Text>
        </View>
        <View style={styles.View_327_161}>
          <Text style={styles.Text_327_161}>NA</Text>
        </View>
        <View style={styles.View_327_162}>
          <Text style={styles.Text_327_162}>NA</Text>
        </View>
        <View style={styles.View_327_163}>
          <Text style={styles.Text_327_163}>NA</Text>
        </View>
        <View style={styles.View_327_164}>
          <Text style={styles.Text_327_164}>NA</Text>
        </View>
        <View style={styles.View_327_165}>
          <Text style={styles.Text_327_165}>NA</Text>
        </View>
        <View style={styles.View_327_166}>
          <Text style={styles.Text_327_166}>NA</Text>
        </View>
        <View style={styles.View_327_167}>
          <Text style={styles.Text_327_167}>NA</Text>
        </View>
        <View style={styles.View_327_168}>
          <Text style={styles.Text_327_168}>NA</Text>
        </View>
        <View style={styles.View_327_169}>
          <Text style={styles.Text_327_169}>NA</Text>
        </View>
        <View style={styles.View_327_170}>
          <Text style={styles.Text_327_170}>NA</Text>
        </View>
        <View style={styles.View_327_171}>
          <Text style={styles.Text_327_171}>NA</Text>
        </View>
        <View style={styles.View_327_172}>
          <Text style={styles.Text_327_172}>NA</Text>
        </View>
        <View style={styles.View_327_173}>
          <Text style={styles.Text_327_173}>NA</Text>
        </View>
        <View style={styles.View_327_174}>
          <Text style={styles.Text_327_174}>NA</Text>
        </View>
        <View style={styles.View_327_175}>
          <Text style={styles.Text_327_175}>NA</Text>
        </View>
        <View style={styles.View_327_176}>
          <Text style={styles.Text_327_176}>NA</Text>
        </View>
        <View style={styles.View_327_177}>
          <Text style={styles.Text_327_177}>NA</Text>
        </View>
        <View style={styles.View_327_178}>
          <Text style={styles.Text_327_178}>NA</Text>
        </View>
        <View style={styles.View_327_179}>
          <Text style={styles.Text_327_179}>NA</Text>
        </View>
        <View style={styles.View_327_180}>
          <Text style={styles.Text_327_180}>NA</Text>
        </View>
        <View style={styles.View_327_181}>
          <Text style={styles.Text_327_181}>NA</Text>
        </View>
        <View style={styles.View_327_182}>
          <Text style={styles.Text_327_182}>NA</Text>
        </View>
        <View style={styles.View_327_183}>
          <Text style={styles.Text_327_183}>NA</Text>
        </View>
        <View style={styles.View_327_184}>
          <Text style={styles.Text_327_184}>NA</Text>
        </View>
        <View style={styles.View_327_185}>
          <Text style={styles.Text_327_185}>NA</Text>
        </View>
        <View style={styles.View_327_186}>
          <Text style={styles.Text_327_186}>NA</Text>
        </View>
        <View style={styles.View_327_187}>
          <Text style={styles.Text_327_187}>NA</Text>
        </View>
        <View style={styles.View_327_188}>
          <Text style={styles.Text_327_188}>NA</Text>
        </View>
        <View style={styles.View_327_189}>
          <Text style={styles.Text_327_189}>NA</Text>
        </View>
        <View style={styles.View_327_190} />
        <View style={styles.View_327_191} />
        <View style={styles.View_327_192} />
        <View style={styles.View_327_193} />
        <View style={styles.View_327_194} />
        <View style={styles.View_327_195} />
        <View style={styles.View_327_196} />
        <View style={styles.View_327_197} />
        <View style={styles.View_327_198} />
        <View style={styles.View_327_199}>
          <Text style={styles.Text_327_199}>Pantone No.</Text>
        </View>
        <View style={styles.View_327_200}>
          <Text style={styles.Text_327_200}>NA</Text>
        </View>
        <View style={styles.View_327_201}>
          <Text style={styles.Text_327_201}>NA</Text>
        </View>
        <View style={styles.View_327_202}>
          <Text style={styles.Text_327_202}>NA</Text>
        </View>
        <View style={styles.View_327_203}>
          <Text style={styles.Text_327_203}>NA</Text>
        </View>
        <View style={styles.View_327_204}>
          <Text style={styles.Text_327_204}>NA</Text>
        </View>
        <View style={styles.View_327_205}>
          <Text style={styles.Text_327_205}>NA</Text>
        </View>
        <View style={styles.View_327_206}>
          <Text style={styles.Text_327_206}>NA</Text>
        </View>
        <View style={styles.View_327_207}>
          <Text style={styles.Text_327_207}>NA</Text>
        </View>
        <View style={styles.View_327_208}>
          <Text style={styles.Text_327_208}>NA</Text>
        </View>
        <View style={styles.View_327_209}>
          <Text style={styles.Text_327_209}>NA</Text>
        </View>
        <View style={styles.View_327_210}>
          <Text style={styles.Text_327_210}>NA</Text>
        </View>
        <View style={styles.View_327_211}>
          <Text style={styles.Text_327_211}>Lab Value - a</Text>
        </View>
        <View style={styles.View_327_212}>
          <Text style={styles.Text_327_212}>Lab Value - b</Text>
        </View>
        <View style={styles.View_327_213}>
          <Text style={styles.Text_327_213}>Delta E Value (rEab)</Text>
        </View>
        <View style={styles.View_327_214}>
          <Text style={styles.Text_327_214}>
            Spectrophotometer Standard Setting
          </Text>
        </View>
      </View>
      <View style={styles.View_327_215}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6bca39c-b6b9-4c48-a584-27fe9678cf43"
          }}
          style={styles.ImageBackground_327_216}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bec729d-5e70-41e7-93b8-366db460a682"
          }}
          style={styles.ImageBackground_327_217}
        />
      </View>
      <View style={styles.View_327_218}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bf5d739-e78b-46a0-91de-f6cb06d228ec"
          }}
          style={styles.ImageBackground_327_219}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/421b5d87-3967-4d37-833e-32cb8811eba8"
          }}
          style={styles.ImageBackground_327_220}
        />
      </View>
      <View style={styles.View_327_221}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b16db1e3-f03e-404d-917d-d0b1b98c32a6"
          }}
          style={styles.ImageBackground_327_222}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6ecdcb3-25a6-47b8-8687-1f6077527e5c"
          }}
          style={styles.ImageBackground_327_223}
        />
      </View>
      <View style={styles.View_327_224}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46e84ad1-2f23-46ad-8f33-dc9ab827c4e3"
          }}
          style={styles.ImageBackground_327_225}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f14daa28-3ec3-4082-a4e3-d7850e6c7a5b"
          }}
          style={styles.ImageBackground_327_226}
        />
      </View>
      <View style={styles.View_327_227}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ecc077d-9a6f-4959-97bd-14fdae236720"
          }}
          style={styles.ImageBackground_327_228}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30ff5972-c2f2-4831-9181-882af08ad043"
          }}
          style={styles.ImageBackground_327_229}
        />
      </View>
      <View style={styles.View_327_230}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ca4637d-16ef-4c8c-97cd-8f4455922516"
          }}
          style={styles.ImageBackground_327_231}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b219b42-a0e5-473a-9d3f-d34780399da3"
          }}
          style={styles.ImageBackground_327_232}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58a8bc05-b04f-43a1-a374-5186decb486c"
        }}
        style={styles.ImageBackground_327_233}
      />
      <View style={styles.View_327_234}>
        <View style={styles.View_327_235} />
        <TouchableOpacity
          style={styles.TouchableOpacity_327_236}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_61"))
          }
        >
          <Text style={styles.Text_327_236}>Artist Path</Text>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1245564-2ef3-44fc-aa6f-990d3f7cf8bc"
          }}
          style={styles.ImageBackground_327_237}
        />
        <View style={styles.View_327_238}>
          <Text style={styles.Text_327_238}>Packaging Development</Text>
        </View>
      </View>
      <View style={styles.View_336_10}>
        <View style={styles.View_336_11}>
          <View style={styles.View_336_12} />
          <View style={styles.View_336_13}>
            <Text style={styles.Text_336_13}>Reset to Default</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5c2e215-197f-43c4-b767-75784de76ef0"
          }}
          style={styles.ImageBackground_336_14}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("118%") },
  View_327_25: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("26%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_327_26: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("-4%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_27: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("6%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_28: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("122%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_29: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("13%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_30: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("129%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_31: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("33%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_32: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("149%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_33: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_34: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("117%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_35: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("20%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_36: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("137%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_37: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("6%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_38: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("122%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_39: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("22%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_40: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("139%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_41: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("7%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_42: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("123%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_43: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("56%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_44: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("132%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_45: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("47%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_46: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("122%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_47: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("61%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_48: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("136%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_49: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("64%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_50: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("18%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_51: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("94%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_52: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("46%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_53: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("121%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_54: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("38%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_55: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("113%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_56: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("13%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_57: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("88%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_58: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("74%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_59: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_327_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_60: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_327_60: {
    color: "rgba(136, 130, 132, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_61: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%")
  },
  View_327_62: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("70%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_327_63: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("70%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  ImageBackground_327_64: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("74%")
  },
  ImageBackground_327_65: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("74%")
  },
  View_327_66: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_67: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("74%")
  },
  ImageBackground_327_68: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("29%")
  },
  ImageBackground_327_69: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("74%")
  },
  ImageBackground_327_70: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("74%")
  },
  View_327_71: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_72: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("74%")
  },
  ImageBackground_327_73: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("74%")
  },
  View_327_74: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_74: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_75: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("74%")
  },
  ImageBackground_327_76: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("74%")
  },
  ImageBackground_327_77: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("74%")
  },
  View_327_78: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_79: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("103%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_80: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_327_80: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_81: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("104%")
  },
  ImageBackground_327_82: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_327_83: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)"
  },
  View_327_84: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("103%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_85: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("104%")
  },
  View_327_86: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_327_86: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_87: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_327_88: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_327_89: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)"
  },
  View_327_90: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("26%")
  },
  View_327_91: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_327_92: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%")
  },
  View_327_93: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_94: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_327_94: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_95: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_327_96: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_327_97: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)"
  },
  View_327_98: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_98: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_99: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("29%")
  },
  View_327_100: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_327_100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_101: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("110%")
  },
  View_327_102: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 1
  },
  View_327_103: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_327_103: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_104: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_327_105: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("55%")
  },
  View_327_106: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 0.5
  },
  View_327_107: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_327_107: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_108: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("110%"),
    backgroundColor: "rgba(222, 222, 222, 1)"
  },
  View_327_109: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("110%"),
    justifyContent: "center"
  },
  Text_327_109: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_110: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("13%")
  },
  View_327_111: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_327_111: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_112: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  ImageBackground_327_113: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_327_114: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("1%")
  },
  View_327_115: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_327_115: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_116: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_327_116: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_117: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_327_117: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_118: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("13%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.07999999821186066,
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 2
  },
  ImageBackground_327_119: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  View_327_120: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_327_120: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_121: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("28%")
  },
  View_327_122: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 1
  },
  View_327_123: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_124: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_125: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_126: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_127: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_128: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_129: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_130: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_131: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_132: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_133: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_134: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_136: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_137: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_138: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_139: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_140: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_141: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_142: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_143: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_144: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_145: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_146: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_147: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_148: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_149: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_150: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_151: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_152: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_153: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_154: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_155: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_156: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_157: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_158: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_159: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_160: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_327_160: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_161: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_161: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_162: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_162: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_163: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_163: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_164: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_164: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_165: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_165: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_166: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_166: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_167: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_167: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_168: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_168: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_169: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_169: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_170: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_170: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_171: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_171: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_172: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_172: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_173: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_173: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_174: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_174: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_175: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_175: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_176: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_176: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_177: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_177: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_178: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_178: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_179: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_179: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_180: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_180: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_181: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_181: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_182: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_182: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_183: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_183: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_184: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_184: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_185: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_185: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_186: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_186: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_187: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_187: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_188: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_188: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_189: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_189: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_190: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_191: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_192: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_193: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_194: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_195: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_196: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_197: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_198: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_199: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_327_199: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_200: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_200: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_201: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_201: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_202: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_202: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_203: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_203: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_204: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_204: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_205: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_205: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_206: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_206: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_207: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_207: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_208: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_208: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_209: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_209: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_210: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_210: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_211: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_327_211: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_212: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_327_212: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_213: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_327_213: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_214: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_327_214: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_215: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("74%")
  },
  ImageBackground_327_216: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_217: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_327_218: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("74%")
  },
  ImageBackground_327_219: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_220: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_327_221: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("74%")
  },
  ImageBackground_327_222: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_223: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_327_224: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("74%")
  },
  ImageBackground_327_225: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_226: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_327_227: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("74%")
  },
  ImageBackground_327_228: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_229: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_327_230: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("29%")
  },
  ImageBackground_327_231: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_232: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_327_233: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("58%")
  },
  View_327_234: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("48%")
  },
  View_327_235: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_327_236: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_327_236: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_237: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_327_238: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_238: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_336_10: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%")
  },
  View_336_11: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_336_12: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 0.5
  },
  View_336_13: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_336_13: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_336_14: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
