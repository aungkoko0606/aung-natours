const Review = require('./../model/reviewModel');
//const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllReviews = factory.getAll(Review);

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// exports.createReview = catchAsync(async (req, res) => {
//   const review = await Review.create({
//     review: req.body.review,
//     rating: req.body.rating,
//     tour: req.body.tour,
//     user: req.body.user,
//   });

//   res.status(201).json({
//     status: 'success',
//     data: {
//       review,
//     },
//   });
// });
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
