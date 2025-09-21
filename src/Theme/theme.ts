import { css } from "@emotion/react";

//color
export const Color = {
  Primary: {
    HotPink_30: "#FF99B9",
    HotPink_20: "#FF709D",
    HotPink_10: "#FF3B79",
    HotPink_Translucence: "rgba(255, 59, 121, 0.4)",
  },

  GrayScale: {
    GrayScale_100: "#000000",
    GrayScale_90: "#060610",
    GrayScale_80: "#141420",
    GrayScale_70: "#1D1E2E",
    GrayScale_60: "#26273C",
    GrayScale_50: "#7D7E89",
    GrayScale_40: "#A9A9B0",
    GrayScale_30: "#D4D4D6",
    GrayScale_20: "#E2E2E4",
    GrayScale_10: "#FFFFFF",

    Translucence: {
      Translucence_50: "rgba(146, 155, 173, 0.2)",
      Translucence_10: "rgba(255, 255, 255, 0.1)",
      Translucence_40: "rgba(255, 255, 255, 0.4)",
    },
  },
};

export const Theme = {
  Functional: {
    Primary: Color.Primary.HotPink_10,
    Primary_2nd: Color.Primary.HotPink_20,
    Primary_3rd: Color.Primary.HotPink_30,
    Primary_Translucence: Color.Primary.HotPink_Translucence,
  },

  Text: {
    Text_Disabled: Color.GrayScale.Translucence.Translucence_50,
    Text_Translucence: Color.GrayScale.Translucence.Translucence_10,
    Text_10: Color.GrayScale.GrayScale_10,
    Text_20: Color.GrayScale.GrayScale_20,
    Text_30: Color.GrayScale.GrayScale_30,
  },

  Surface: {
    Surface_10: Color.GrayScale.GrayScale_90,
    Surface_20: Color.GrayScale.GrayScale_80,
    Surface_30: Color.GrayScale.GrayScale_60,
  },

  Stroke: {
    Stroke_Main: Color.GrayScale.GrayScale_60,
    Stroke_10: Color.GrayScale.Translucence.Translucence_50,
    Stroke_20: Color.GrayScale.GrayScale_50,
  },
};

export const Gap = {
  Gap_4: "0.25rem",
  Gap_6: "0.375rem",
  Gap_8: "0.5rem",
  Gap_12: "0.75rem",
  Gap_16: "1rem",
  Gap_20: "1.25rem",
  Gap_24: "1.5rem",
  Gap_32: "2rem",
  Gap_36: "2.25rem",
  Gap_42: "2.625rem",
};

export const Radius = {
  radius_4: "0.24rem",
  radius_6: "0.375rem",
  radius_8: "0.5rem",
  radius_12: "0.75rem",
  radius_16: "1rem",
  radius_20: "1.25rem",
  radius_36: "2.25rem",
  radius_48: "3rem",
  radius_76: "4.75rem",
  radius_Max: "999rem",
};

export const Text = {
  Main: {
    L: css`
      font-size: 2.75rem;
      line-height: 3rem;
      font-weight: 600;
    `,

    M: css`
      font-size: 2.375rem;
      line-height: 2.625rem;
      font-weight: 600;
    `,

    S: css`
      font-size: 1.625rem;
      line-height: 2rem;
      font-weight: 600;
    `,
  },

  Title: {
    L: css`
      font-size: 1.5rem;
      line-height: 1.75rem;
      font-weight: 500;
    `,

    M: css`
      font-size: 1.375rem;
      line-height: 1.625rem;
      font-weight: 500;
    `,

    S: css`
      font-size: 1.25rem;
      line-height: 1.5rem;
      font-weight: 500;
    `,
  },

  Body: {
    M: css`
      font-size: 1.063rem;
      line-height: 1.5rem;
      font-weight: 400;
    `,
    S: css`
      font-size: 0.938rem;
      line-height: 20rem;
      font-weight: 400;
    `,
  },

  Label: {
    M: css`
      font-size: 0.875rem;
      line-height: 1rem;
      font-weight: 400;
    `,
    S: css`
      font-size: 0.688rem;
      line-height: 0.875rem;
      font-weight: 400;
    `,
  },
};
