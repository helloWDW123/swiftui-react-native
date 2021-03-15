import React from 'react';
import { Frame, Padding, HorizontalAlignment } from '../../types/propTypes';
import { Spacer } from '../Spacer';
import { systemColor, UIColor } from '../../utils/colors/utils';
import { FlexAlignType, View } from 'react-native';
import { getPadding } from '../../utils/getPadding';
import { Alignments } from '../../utils/alignments';
import { getFrame } from '../../utils/getFrame';
import { useColorScheme } from '../../hooks/useColorScheme';

type VStackProps = {
  background?: string;
  alignment?: HorizontalAlignment;
  padding?: Padding;
  spacing?: number;
  width?: number;
  frame?: Frame;
  fillSpace?: string;
  cornerRadius?: number;
  children: React.ReactElement<any> | React.ReactElement<any>[];
};

export const VStack = ({
  background = UIColor.transparent,
  spacing,
  alignment = Alignments.horizontal.center as HorizontalAlignment,
  fillSpace,
  cornerRadius = 0,
  padding,
  frame,
  children,
}: VStackProps) => {
  const { colorScheme } = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: systemColor(background, colorScheme),
        alignItems: Alignments.horizontal[alignment] as FlexAlignType,
        justifyContent: 'center',
        borderRadius: cornerRadius,
        ...getFrame(frame),
        ...getPadding(padding),
      }}
    >
      {spacing && spacing !== 0
        ? React.Children.map(children, (child) => (
            <>
              <Spacer space={spacing} />
              {child}
              <Spacer space={spacing} />
            </>
          ))
        : children}
    </View>
  );
};
