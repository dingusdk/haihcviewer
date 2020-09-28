export class IHCBase {
  Name: string;
  Id: number;

  constructor(node: Element) {
    this.Name = node.attributes["name"].value;
    var id: string = node.attributes["id"].value;
    this.Id = parseInt(id.substring(3), 16);
  }

  protected FindAndAdd(
    node: Element,
    subnodename: string,
    addnode: (subnode: Element) => void
  ): void {
    var nodes = node.ownerDocument.evaluate(
      subnodename,
      node,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    do {
      var subnode: Element = nodes.iterateNext() as Element;
      if (subnode == null) break;
      addnode(subnode);
    } while (true);
  }
}

export class IHCGroup extends IHCBase {
  Note: string;
  FunctionBlocks: IHCFunctionBlock[];
  Products: IHCProduct[];

  constructor(node: Element) {
    super(node);
    this.Note = node.attributes["note"].value;
    this.FunctionBlocks = new Array();
    this.Products = new Array();
    this.FindAndAdd(node, "functionblock", (subnode: Element) => {
      this.FunctionBlocks.push(new IHCFunctionBlock(subnode));
    });
    var products = node.ownerDocument.evaluate(
      "product_airlink",
      node,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    do {
      var pnode: Element = products.iterateNext() as Element;
      if (pnode == null) break;
      var product: IHCWirelessProduct = new IHCWirelessProduct(pnode);
      this.Products.push(product);
    } while (true);
    products = node.ownerDocument.evaluate(
      "product_dataline",
      node,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    do {
      var pnode: Element = products.iterateNext() as Element;
      if (pnode == null) break;
      var product: IHCDatalineProduct = new IHCDatalineProduct(pnode);
      this.Products.push(product);
    } while (true);
  }
}

export class IHCProduct extends IHCBase {
  Note: string;
  Position: string;
  Inputs: IHCInput[];
  Outputs: IHCOutput[];

  constructor(node: Element) {
    super(node);
    this.Inputs = new Array();
    this.Outputs = new Array();
    this.Note = node.attributes["note"].value;
    this.Position = node.attributes["position"].value;
    this.FindAndAdd(node, "airlink_input", (subnode: Element) => {
      this.Inputs.push(new IHCInput(subnode));
    });
    this.FindAndAdd(node, "airlink_dimmer_increase", (subnode: Element) => {
      this.Inputs.push(new IHCInput(subnode));
    });
    this.FindAndAdd(node, "airlink_dimmer_decrease", (subnode: Element) => {
      this.Inputs.push(new IHCInput(subnode));
    });
    this.FindAndAdd(node, "airlink_dimming", (subnode: Element) => {
      this.Inputs.push(new IHCInput(subnode));
    });
    this.FindAndAdd(node, "dataline_input", (subnode: Element) => {
      this.Inputs.push(new IHCInput(subnode));
    });

    this.FindAndAdd(node, "airlink_relay", (subnode: Element) => {
      this.Outputs.push(new IHCOutput(subnode));
    });
    this.FindAndAdd(node, "dataline_output", (subnode: Element) => {
      this.Outputs.push(new IHCOutput(subnode));
    });
    this.FindAndAdd(node, "light_indication", (subnode: Element) => {
      this.Outputs.push(new IHCOutput(subnode));
    });
  }
}

export class IHCWirelessProduct extends IHCProduct {
  constructor(node: Element) {
    super(node);
  }
}

export class IHCDatalineProduct extends IHCProduct {
  constructor(node: Element) {
    super(node);
  }
}

export class IHCFunctionBlock extends IHCBase {
  Note: string;
  Inputs: IHCInput[];
  Outputs: IHCOutput[];

  constructor(node: Element) {
    super(node);
    this.Note = node.attributes["note"].value;
    this.Inputs = new Array();
    var inputs = node.ownerDocument.evaluate(
      "inputs/*",
      node,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    do {
      var inputnode: Element = inputs.iterateNext() as Element;
      if (inputnode == null) break;
      var input: IHCInput = new IHCInput(inputnode);
      this.Inputs.push(input);
    } while (true);

    this.Outputs = new Array();
    var outputs = node.ownerDocument.evaluate(
      "outputs/*",
      node,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    do {
      var outputnode: Element = outputs.iterateNext() as Element;
      if (outputnode == null) break;
      var output: IHCOutput = new IHCOutput(outputnode);
      this.Outputs.push(output);
    } while (true);
  }
}

export class IHCResource extends IHCBase {
  constructor(node: Element) {
    super(node);
  }
}

export class IHCInput extends IHCResource {
  constructor(node: Element) {
    super(node);
  }
}

export class IHCOutput extends IHCResource {
  constructor(node: Element) {
    super(node);
  }
}

export class IHCProject {
  protected xmldoc: XMLDocument;

  Groups: IHCGroup[];

  constructor(xmldoc: XMLDocument) {
    this.xmldoc = xmldoc;
    this.Groups = new Array();
    var gs = this.xmldoc.evaluate(
      "/utcs_project/groups/group",
      this.xmldoc,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    do {
      var node: Element = gs.iterateNext() as Element;
      if (node == null) break;
      var group: IHCGroup = new IHCGroup(node);
      this.Groups.push(group);
    } while (true);
  }
}
