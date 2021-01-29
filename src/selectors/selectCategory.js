const selectCategory = (categories ,categoryId) => {
    return categories.find((category) => category.categoryId === categoryId)
}

export default selectCategory;
