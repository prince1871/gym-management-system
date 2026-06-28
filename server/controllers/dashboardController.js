const User = require("../models/User");
const Membership = require("../models/Membership");
const Subscription = require("../models/Subscription");

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalMemberships =
      await Membership.countDocuments();

    const totalSubscriptions =
      await Subscription.countDocuments();

    const activeSubscriptions =
      await Subscription.countDocuments({
        status: "active",
      });

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalMemberships,
        totalSubscriptions,
        activeSubscriptions,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};