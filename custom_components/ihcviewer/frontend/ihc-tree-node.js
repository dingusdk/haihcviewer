class IhcTreeNode extends Polymer.Element {
    static get is() {
        return "ihc-tree-node";
    }
    static get properties() {
        return {
            data: {
                type: Object,
            },
            expanded: {
                type: Boolean,
            },
            selected: {
                type: Boolean,
            },
        };
    }
    constructor() {
        super();
        this.expanded = false;
        this.selected = false;
    }

    getThemeClasses() {
        return "";
    }

    getExpandClasses(expanded) {
        return expanded ? "expandicon expanded" : "expandicon";
    }
    toggleExpand() {
        this.expanded = !this.expanded;
    }
    getSelectedClasses(selected) {
        return selected ? "selected" : "";
    }
    select(e) {
        this.dispatchEvent(
            new CustomEvent("select", {
                bubbles: true,
                composed: true,
                detail: { node: this },
            })
        );
    }
}
customElements.define(IhcTreeNode.is, IhcTreeNode);
