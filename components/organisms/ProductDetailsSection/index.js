import React, {useState, useEffect} from 'react';

var _ = require('lodash');
import {
    Container,
    ProductDetailsProper, Detail,
    Title, Category,
    DiscountedPrice, OldPrice,
    ColorBadge, Label,
    SizeBadge, Dropdown,
    AddToCartButton, Description,

    //for image preview
    ImagesContainer, Image,
    ImageCard, ImageCardsHolder
} from "./style";
import {ReactComponent as Basket} from '../../../assets/white_basket.svg'
import ArrowUp from '../../../assets/arrow-up.svg'
import ArrowDown from '../../../assets/arrow-down.svg'


const customStyle = {display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'};


const ProductDetailsSection = ({product}) => {

    let variants = product.variants.edges;

    //change all keys for variants selectedOptions to lower case
    //This is because some can come as 'Size' while others can come as 'size'
    variants.map(({node}) => {
        node.selectedOptions.map(o => o['name'] = o['name'].toLowerCase());
    });

    const sizes = _.find(product.options, ['name', 'Size']) || _.find(product.options, ['name', 'size']);
    const colors = _.find(product.options, ['name', 'Color']) || _.find(product.options, ['name', 'color']);
    // console.log(sizes, colors)
    // console.log(product.options)

    const colorsArray = colors ? colors.values : null;
    const sizesArray = sizes ? sizes.values : null;

    const [selectedColor, setSelectedColor] = useState(colors ? colorsArray[0] : '');
    const [selectedSize, setSelectedSize] = useState(sizes ? sizesArray[0] : '');

    const [featuredImage, setFeaturedImage] = useState(null);
    const [hideDesc, setHideDesc] = useState(true);


    let selectedOptions;
    if (sizes && !colors) {
        selectedOptions = [
            {
                'name': 'size',
                'value': selectedSize
            }
        ];
    } else if (colors && !sizes) {
        selectedOptions = [
            {
                'name': 'color',
                'value': setSelectedColor
            }
        ];
    } else {
        selectedOptions = [
            {
                'name': 'size',
                'value': selectedSize
            },
            {
                'name': 'color',
                'value': selectedColor
            }
        ];
    }


    const selectedVariant = _.find(variants, ['node.selectedOptions', selectedOptions]).node;

    let options = [];
    if (selectedVariant.availableForSale) {
        for (let i = 1; i <= 10; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
    } else options = <option value="0">0</option>

    const {currencyCode} = product.priceRange.minVariantPrice


    return (
        <Container>
            <ImagesContainer>
                <ImageCardsHolder>
                    {product.images.edges && product.images.edges.map(({node}) => <ImageCard
                        isFeaturedImage={featuredImage ? node.id === featuredImage.id : false}
                        onClick={() => setFeaturedImage(node)}
                        src={node.transformedSrc}
                        key={node.id}/>)}
                </ImageCardsHolder>
                <Image
                    src={featuredImage ? featuredImage.transformedSrc : product.images.edges[0].node.transformedSrc}/>
            </ImagesContainer>
            <ProductDetailsProper>
                <Detail>
                    <Category>{product.productType}</Category>
                    <Title>{product.title}</Title>
                </Detail>
                <Detail>
                    {selectedVariant.compareAtPrice &&
                    <OldPrice>{currencyCode} {selectedVariant.compareAtPrice}</OldPrice>}
                    <DiscountedPrice>{currencyCode} {selectedVariant.price}</DiscountedPrice>
                </Detail>
                {
                    colors &&
                    <Detail>
                        <Label>Color:</Label>
                        <div style={customStyle}>
                            {colorsArray.map(color => <ColorBadge key={color} onClick={() => setSelectedColor(color)}
                                                                  isSelected={selectedColor === color}>{color}</ColorBadge>)}
                        </div>
                    </Detail>
                }
                {
                    sizes &&
                    <Detail>
                        <Label>Size:</Label>
                        <div style={customStyle}>
                            {sizesArray.map(size => <SizeBadge key={size} onClick={() => setSelectedSize(size)}
                                                               isSelected={selectedSize === size}>{size}</SizeBadge>)}
                        </div>
                    </Detail>
                }
                <Detail>
                    <Label>Quantity:</Label>
                    <div style={{customStyle}}>
                        <Dropdown>
                            {options}
                        </Dropdown>
                        <AddToCartButton disabled={!selectedVariant.availableForSale}
                                         availableForSale={selectedVariant.availableForSale}>
                            {selectedVariant.availableForSale && <Basket style={{height: '20px', marginRight: '5px'}}/>}
                            {selectedVariant.availableForSale ? 'Add to cart' : 'Out of stock'}
                        </AddToCartButton>
                    </div>
                </Detail>
                <Detail hideBorder={true}>
                    <div onClick={() => setHideDesc(!hideDesc)} style={{display: 'flex', width: '100%'}}>
                        <Label>Description</Label>
                        <p>{hideDesc === false ? <ArrowUp/> : <ArrowDown/>}</p>
                    </div>
                    <Description hideDesc={hideDesc} dangerouslySetInnerHTML={{__html: product.descriptionHtml}}/>
                </Detail>
            </ProductDetailsProper>
        </Container>
    )
};

export default ProductDetailsSection