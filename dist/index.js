"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visit = require("unist-util-visit");
// https://bulma.io/documentation/elements/content/
/* eslint-disable no-param-reassign */
module.exports = ({ markdownAST }, pluginOptions) => {
    // https://github.com/syntax-tree/mdast#paragraph
    visit(markdownAST, 'paragraph', (node, _, parent) => {
        if (parent !== undefined && parent.type === 'root') {
            node.data = {
                hProperties: { class: 'content' },
            };
        }
    });
    // https://github.com/syntax-tree/mdast#heading
    visit(markdownAST, 'heading', (node) => {
        const { depth } = node;
        if (typeof depth === 'number' && pluginOptions.heading !== undefined) {
            const classValue = pluginOptions.heading(depth);
            if (classValue !== undefined) {
                node.data = {
                    hProperties: { class: classValue },
                };
            }
        }
    });
    // https://github.com/syntax-tree/mdast#blockquote
    visit(markdownAST, 'blockquote', (node, index, parent) => {
        if (parent !== undefined) {
            parent.children.splice(index, 1, {
                type: 'section',
                data: {
                    hName: 'div',
                    hProperties: { class: 'content' },
                },
                children: [node],
            });
        }
    });
    // https://github.com/syntax-tree/mdast#list
    visit(markdownAST, 'list', (node, index, parent) => {
        if (parent !== undefined) {
            parent.children.splice(index, 1, {
                type: 'section',
                data: {
                    hName: 'div',
                    hProperties: { class: 'content' },
                },
                children: [node],
            });
        }
    });
    return markdownAST;
};
//# sourceMappingURL=index.js.map