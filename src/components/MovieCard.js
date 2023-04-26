import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";
import IMAGES from "../constants/Images";
import { Ionicons } from "@expo/vector-icons";
import { getPoster, getLanguage } from "../services/MovieService";

const MovieCard = ({
  title,
  poster,
  language,
  voteAverage,
  voteCount,
  size,
  heartLess,
  onPress,
}) => {
  const [liked, setLiked] = useState(false);
  const [voteCountValue, setVoteCountValue] = useState(voteCount);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        style={{ ...styles.container, width: 230 * size, height: 340 * size }}
        imageStyle={{ borderRadius: 0 }}
        source={{ uri: getPoster(poster) }}
      ></ImageBackground>
      <View>
        <Text
          style={{ ...styles.movieTitle, width: 230 * size }}
          numberOfLines={3}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
  },
  movieTitle: {
    fontFamily: FONTS.EXTRA_BOLD,
    color: COLORS.GRAY,
    paddingVertical: 2,
    marginTop: 5,
    width: 230,
  },
});

MovieCard.defaultProps = {
  size: 1,
  heartLess: true,
};

export default MovieCard;
