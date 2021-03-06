

function reviewerListing(parent, _args, context) {
  return context.prisma.reviewerListing({ coachID: parent.id })
}


function resume_reviews_as_coach(parent, _args, context) {
  return context.prisma.resumeReviews({ where: { coach: parent.id } })
}

function resume_reviews_as_seeker(parent, _args, context) {
  return context.prisma.resumeReviews({ where: { seeker: parent.id } })
}



module.exports = {
  reviewerListing,
  resume_reviews_as_coach,
  resume_reviews_as_seeker,
}
