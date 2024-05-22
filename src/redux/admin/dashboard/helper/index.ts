

export const handleCommentOverView = (data:any) => {
    const filteredComments = data.filter((comment:any) => comment.saoBinhLuan >= 0 && comment.saoBinhLuan <= 5);
    const totalStars = filteredComments.reduce((sum:number, comment:any) => sum + comment.saoBinhLuan, 0);


    return {
        totalComments: filteredComments.length,
        totalStars,
    }
}