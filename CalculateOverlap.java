public class CalculateOverlap {
    private Rectangle r1;
    private Rectangle r2;
    private int overlap;

    public CalculateOverlap(int bottomX, int bottomY, int topX, int topY,
                            int bottomX2, int bottomY2, int topX2, int topY2) {

        this.r1 = new Rectangle(bottomX, bottomY, topX, topY);
        this.r2 = new Rectangle(bottomX2, bottomY2, topX2, topY2);
        this.overlap = getOverlap();
    }

    public CalculateOverlap(Rectangle r1, Rectangle r2) {
        this.r1 = r1;
        this.r2 = r2;
        this.overlap = getOverlap();
    }

    private int getOverlap() {

        int bottomX1 = r1.getBottomLeftX();
        int bottomY1 = r1.getBottomLeftY();
        int topX1 = r1.getTopRightX();
        int topY1 = r1.getTopRightY();
        int bottomX2 = r2.getBottomLeftX();
        int bottomY2 = r2.getBottomLeftY();
        int topX2 = r2.getTopRightX();
        int topY2 = r2.getTopRightY();
         
        if (bottomX1 > topX2 ||
            bottomY1 > topY2 ||
            bottomX2 > topX1 ||
            bottomY2 > topY1) {

            return 0;

        } else if (bottomX1 <= topX2 &&
                    bottomY1 <= topY2 &&
                    bottomX2 <= topX1 &&
                    bottomY2 <= topY1) {

            if ((r2.getBottomLeftX() <= r1.getBottomLeftX() || r2.getBottomLeftX() >= r1.getBottomLeftX()) &&
                r2.getBottomLeftY() >= r1.getBottomLeftY() &&
                r2.getTopRightX() <= r1.getTopRightX() &&
                r2.getTopRightY() <= r1.getTopRightY()) {

                return r2.calculateArea();
            } else {
                return r1.calculateArea();
            }

        } else if (bottomX1 <= topX2 &&
                    bottomY1 <= topY2){

            Rectangle overlapRectangle = new Rectangle(bottomX1, bottomY1, topX2, topY2);
            return overlapRectangle.calculateArea();

        } else if (bottomX2 <= topX1 &&
                    bottomY2 <= topY1) {

            Rectangle overlapRectangle = new Rectangle(topX2, topY2, bottomX1, bottomY1);
            return overlapRectangle.calculateArea();

        } else {
            return 0;
        }
    }

    public int overlap() {
        return this.overlap;
    }
}