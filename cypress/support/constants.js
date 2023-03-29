import { id } from "./helpers";

export const DESIGNER = "designer"
export const VISUALIZER = "visualizer"
export const extension = {
  path: "/api/provider/extension*",
  alias: "extensionFileLoad"
};

export const designEndpoint = {
  path: "/api/pattern*",
  alias: "designEp",
  wait: "@designEp",
  absolutePath: "/api/pattern"
}

export const MESHMAP_PATH = "/extension/meshmap";

export const CANVAS_CONTAINER_ID = "cy-canvas-container"

export const TIME = {
  SMALL: 500,
  MEDIUM: 1000,
  LARGE: 1500,
  XLARGE: 2000,
  XXLARGE: 5000
}

export const canvasContainer = {
  query: id(CANVAS_CONTAINER_ID),
  alias: "canvas"
}

export const cypressTestDesign = {
  url: "/extension/meshmap?design=c81d8e82-7627-48c4-b419-5438daf0f100",
  id: "c81d8e82-7627-48c4-b419-5438daf0f100",
}
export const hierarchyRelationshipDesign = {
  url: "/extension/meshmap?design=fd3d7210-75be-484b-9561-862e788adea3",
  id: "fd3d7210-75be-484b-9561-862e788adea3"
}

export const cytoConversion = {
  url: "/api/pattern?output=cytoscape",
  method: "POST",
  alias: "cytoPatternConversion",
  wait: "@cytoPatternConversion"
}

/**
 * Selection and general Event Binding Layer
 */
export const canvasLayer0 = {
  query: '[data-id="layer0-selectbox"]',
  alias: "layer0"
}

/**
 * drag and drop Layer
 */
export const canvasLayer1 = {
  query: '[data-id="layer1-drag"]',
  alias: "layer1"
}

/**
 * Node and Element Layer
 */
export const canvaslayer2 = {
  query: '[data-id="layer2-node"]',
  alias: "layer2"
}
