const {CarController} = include('controllers');

module.exports = router => {
    router.route('/').get(CarController.fetch);
    return router;
}