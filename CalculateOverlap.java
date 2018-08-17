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
        if (r1.getBottomLeftX() > r2.getTopRightX() ||
            r1.getBottomLeftY() > r2.getTopRightY() ||
            r2.getBottomLeftX() > r1.getTopRightX() ||
            r2.getBottomLeftY() > r1.getTopRightY()) {

            return 0;

        } else if (r1.getBottomLeftX() <= r2.getTopRightX() &&
                    r1.getBottomLeftY() <= r2.getTopRightY() &&
                    r2.getBottomLeftX() <= r1.getTopRightX() &&
                    r2.getBottomLeftY() <= r1.getTopRightY()) {

            if ((r2.getBottomLeftX() <= r1.getBottomLeftX() || r2.getBottomLeftX() >= r1.getBottomLeftX()) &&
                r2.getBottomLeftY() >= r1.getBottomLeftY() &&
                r2.getTopRightX() <= r1.getTopRightX() &&
                r2.getTopRightY() <= r1.getTopRightY()) {

                return r2.calculateArea();
            } else {
                return r1.calculateArea();
            }

        } else if (r1.getBottomLeftX() <= r2.getTopRightX() &&
                    r1.getBottomLeftY() <= r2.getTopRightY()){

            Rectangle overlapRectangle = new Rectangle(r1.getBottomLeftX(), r1.getBottomLeftY(), r2.getTopRightX(), r2.getTopRightY());
            return overlapRectangle.calculateArea();

        } else if (r2.getBottomLeftX() <= r1.getTopRightX() &&
                    r2.getBottomLeftY() <= r1.getTopRightY()) {

            Rectangle overlapRectangle = new Rectangle(r2.getBottomLeftX(), r2.getBottomLeftY(), r1.getTopRightX(), r1.getTopRightY());
            return overlapRectangle.calculateArea();

        } else {
            return 0;
        }
    }

    public int overlap() {
        return this.overlap;
    }
}