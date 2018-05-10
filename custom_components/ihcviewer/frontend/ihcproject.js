var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IHCBase = /** @class */ (function () {
    function IHCBase(node) {
        this.Name = node.attributes["name"].value;
        var id = node.attributes["id"].value;
        this.Id = parseInt(id.substring(3), 16);
    }
    IHCBase.prototype.FindAndAdd = function (node, subnodename, addnode) {
        var nodes = node.ownerDocument.evaluate(subnodename, node, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        do {
            var subnode = nodes.iterateNext();
            if (subnode == null)
                break;
            addnode(subnode);
        } while (true);
    };
    return IHCBase;
}());
var IHCGroup = /** @class */ (function (_super) {
    __extends(IHCGroup, _super);
    function IHCGroup(node) {
        var _this = _super.call(this, node) || this;
        _this.Note = node.attributes["note"].value;
        _this.FunctionBlocks = new Array();
        _this.Products = new Array();
        _this.FindAndAdd(node, "functionblock", function (subnode) { _this.FunctionBlocks.push(new IHCFunctionBlock(subnode)); });
        var products = node.ownerDocument.evaluate("product_airlink", node, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        do {
            var pnode = products.iterateNext();
            if (pnode == null)
                break;
            var product = new IHCWirelessProduct(pnode);
            _this.Products.push(product);
        } while (true);
        products = node.ownerDocument.evaluate("product_dataline", node, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        do {
            var pnode = products.iterateNext();
            if (pnode == null)
                break;
            var product = new IHCDatalineProduct(pnode);
            _this.Products.push(product);
        } while (true);
        return _this;
    }
    return IHCGroup;
}(IHCBase));
var IHCProduct = /** @class */ (function (_super) {
    __extends(IHCProduct, _super);
    function IHCProduct(node) {
        var _this = _super.call(this, node) || this;
        _this.Inputs = new Array();
        _this.Outputs = new Array();
        _this.Note = node.attributes["note"].value;
        _this.Position = node.attributes["position"].value;
        _this.FindAndAdd(node, "airlink_input", function (subnode) { _this.Inputs.push(new IHCInput(subnode)); });
        _this.FindAndAdd(node, "airlink_dimmer_increase", function (subnode) { _this.Inputs.push(new IHCInput(subnode)); });
        _this.FindAndAdd(node, "airlink_dimmer_decrease", function (subnode) { _this.Inputs.push(new IHCInput(subnode)); });
        _this.FindAndAdd(node, "airlink_dimming", function (subnode) { _this.Inputs.push(new IHCInput(subnode)); });
        _this.FindAndAdd(node, "dataline_input", function (subnode) { _this.Inputs.push(new IHCInput(subnode)); });
        _this.FindAndAdd(node, "airlink_relay", function (subnode) { _this.Outputs.push(new IHCOutput(subnode)); });
        _this.FindAndAdd(node, "dataline_output", function (subnode) { _this.Outputs.push(new IHCOutput(subnode)); });
        _this.FindAndAdd(node, "light_indication", function (subnode) { _this.Outputs.push(new IHCOutput(subnode)); });
        return _this;
    }
    return IHCProduct;
}(IHCBase));
var IHCWirelessProduct = /** @class */ (function (_super) {
    __extends(IHCWirelessProduct, _super);
    function IHCWirelessProduct(node) {
        return _super.call(this, node) || this;
    }
    return IHCWirelessProduct;
}(IHCProduct));
var IHCDatalineProduct = /** @class */ (function (_super) {
    __extends(IHCDatalineProduct, _super);
    function IHCDatalineProduct(node) {
        return _super.call(this, node) || this;
    }
    return IHCDatalineProduct;
}(IHCProduct));
var IHCFunctionBlock = /** @class */ (function (_super) {
    __extends(IHCFunctionBlock, _super);
    function IHCFunctionBlock(node) {
        var _this = _super.call(this, node) || this;
        _this.Note = node.attributes["note"].value;
        _this.Inputs = new Array();
        var inputs = node.ownerDocument.evaluate("inputs/*", node, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        do {
            var inputnode = inputs.iterateNext();
            if (inputnode == null)
                break;
            var input = new IHCInput(inputnode);
            _this.Inputs.push(input);
        } while (true);
        _this.Outputs = new Array();
        var outputs = node.ownerDocument.evaluate("outputs/*", node, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        do {
            var outputnode = outputs.iterateNext();
            if (outputnode == null)
                break;
            var output = new IHCOutput(outputnode);
            _this.Outputs.push(output);
        } while (true);
        return _this;
    }
    return IHCFunctionBlock;
}(IHCBase));
var IHCResource = /** @class */ (function (_super) {
    __extends(IHCResource, _super);
    function IHCResource(node) {
        return _super.call(this, node) || this;
    }
    return IHCResource;
}(IHCBase));
var IHCInput = /** @class */ (function (_super) {
    __extends(IHCInput, _super);
    function IHCInput(node) {
        return _super.call(this, node) || this;
    }
    return IHCInput;
}(IHCResource));
var IHCOutput = /** @class */ (function (_super) {
    __extends(IHCOutput, _super);
    function IHCOutput(node) {
        return _super.call(this, node) || this;
    }
    return IHCOutput;
}(IHCResource));
var IHCProject = /** @class */ (function () {
    function IHCProject(xmldoc) {
        this.xmldoc = xmldoc;
        this.Groups = new Array();
        var gs = this.xmldoc.evaluate("/utcs_project/groups/group", this.xmldoc, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        do {
            var node = gs.iterateNext();
            if (node == null)
                break;
            var group = new IHCGroup(node);
            this.Groups.push(group);
        } while (true);
    }
    return IHCProject;
}());
//# sourceMappingURL=ihcproject.js.map