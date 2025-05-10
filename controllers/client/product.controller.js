module.exports.index = (req, res) => {
    res.render('client/pages/products/index', {
        title: 'Danh sách sản phẩm'
    });
}