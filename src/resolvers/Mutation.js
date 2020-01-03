
// USE THIS TO CONNECT WITH USER AFTER INITIAL SET UP
// const { getUserId } = require('../utils')

// MUTATION CREATE REVIEWER LISTING "POST"
async function createReviewerListing(parent, args, context){
    return context.prisma.createReviewerListing({
        price: args.price,
        position: args.position,
        industry: args.industry,
        description: args.description,
        reviewer: args.reviewer,
        createdAt: args.createdAt,
        updatedAt: args.updatedAt,
        company: args.company,
        isPublished: args.isPublished,
    })
}

// MUTATION DELETE REVIEWER LISTING by ID
function deleteReviewerListing(parent, args, context){
    return context.prisma.deleteReviewerListing({ id: args.id })
}

// MUTATION CREATE RESUME REVIEW "POST"
function createResumeReview(parent, args, context){
    return context.prisma.createResumeReview({
        name: args.name,
        isPending: args.isPending,
        isAccepted: args.isAccepted,
        isDenied: args.isDenied,
        isComplete: args.isComplete,
        dateRequested: args.dateRequested,
        dateAccepted: args.dateAccepted,
        dateCompleted: args.dateCompleted,
    })
}

// MUTATION DELETE RESUME REVIEW by ID
function deleteResumeReview(parent, args, context){
    return context.prisma.deleteResumeReview({ id: args.id })
}

module.exports = {
    createReviewerListing,
    deleteReviewerListing,
    createResumeReview,
    deleteResumeReview,
  }

