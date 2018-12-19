/**
 * Metadata for an object with a {@link MetaModel}.
 *
 * * Corresponds to an object within a {@link MetaModel}.
 * * Some MetaObject instances will also correspond to an {@link Entity} within the {@link Scene}.
 * * MetaObject instances are created by {@link MetaScene#createMetaModel}, which registers them by their IDs in {@link MetaScene#metaObjects}.
 * * {@link MetaModel} models its composition structure with a tree of {@link MetaObject}s, with {@link MetaModel#rootMetaObject} set to the root.
 *
 * @class MetaObject
 */
class MetaObject {

    constructor(metaModel, id, name, type, gid, properties, parent, children) {

        /**
         * Unique ID.
         *
         * MetaObject instances are registered by ID in {@link MetaScene#metaObjects}.
         *
         * @property id
         * @type {String|Number}
         */
        this.id = id;

        /**
         * Model metadata.
         *
         * @property metaModel
         * @type {MetaModel}
         */
        this.metaModel = metaModel;

        /**
         * Human-readable name.
         *
         * @property name
         * @type {String}
         */
        this.name = name;

        /**
         * Type - often an IFC product type.
         *
         * @property type
         * @type {String}
         */
        this.type = type;

        if (gid !== undefined && gid !== null) {

            /**
             * Geometry ID.
             *
             * Undefined when there is no geometry.
             *
             * @property gid
             * @type {Number|String}
             */
            this.gid = gid;
        }

        if (properties) {

            /**
             * Arbitrary properties.
             *
             * Undefined when no properties are represented.
             *
             * @property children
             * @type {{Array of MetaObject}}
             */
            this.properties = properties;
        }

        if (parent !== undefined && parent !== null) {

            /**
             * The parent MetaObject within the structure hierarchy.
             *
             * Undefined when this is the root of its structure.
             *
             * @property parent
             * @type {MetaObject}
             */
            this.parent = parent;
        }

        if (children !== undefined && children !== null) {

            /**
             * Child ObjectMeta instances within the structure hierarchy.
             *
             * Undefined when there are no children.
             *
             * @property children
             * @type {Array}
             */
            this.children = children;
        }
    }
}

export {MetaObject};