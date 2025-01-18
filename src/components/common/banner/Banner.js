import { Flex } from "@adobe/react-spectrum";
import "./banner.css";
import { View } from "@adobe/react-spectrum";

export const Banner = ({ children, type }) => {
  const types = {
    disclaimer: {
      bgColor: "gray-900",
      style: "banner--disclaimer",
    },
    adobeRed: {
      bgColor: "red-500",
      style: "banner--adobe-red",
    },
    hubFooter: {
      bgColor: "none",
      style: "banner--hub-footer",
    },
  };

  const _type = types[type] || types.disclaimer;

  return (
    <View backgroundColor={_type.bgColor} padding="size-100">
      <View id="ResponsiveContainer">
        <Flex justifyContent="center" margin="1em">
          <div className={`banner ${_type.style}`}>{children}</div>
        </Flex>
      </View>
    </View>
  );
};

export default Banner;
