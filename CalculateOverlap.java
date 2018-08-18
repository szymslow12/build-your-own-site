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

        } else if (topX1 >= topX2 && topY1 <= topY2) {

            return calculateOverlap(bottomX2, bottomY2, topX2, topY1);

        } else if (bottomX1 <= bottomX2 && bottomY1 >= bottomY2) {

            return calculateOverlap(bottomX2, bottomY1, topX2, topY2);

        } else if (bottomX1 >= bottomX2 && bottomY1 <= bottomY2) {

            if (topX2 >= topX1 && topY2 >= topY1) {

                return calculateOverlap(bottomX2, bottomY2, topX1, topY1);

            } else {

                return calculateOverlap(bottomX1, bottomY2, topX2, topY2);
            }

        } else if (bottomX1 <= bottomX2 && bottomY1 <= bottomY2) {

            if (topX1 >= topX2 && topY1 >= topY2) {

                return calculateOverlap(bottomX2, bottomY2, topX2, topY2);

            } else {

                return calculateOverlap(bottomX2, bottomY2, topX1, topY2);

            }

        } else {
            System.out.print(r1.toString() + r2.toString());
            return 0;
        }
    }

    private int calculateOverlap(int bottomX, int bottomY, int topX, int topY) {
        System.out.println("Bottom x: " + bottomX + " Bottom y: " + bottomY + " Top x: " + topX + " Top y: " + topY);
        Rectangle overlapRectangle = new Rectangle(bottomX, bottomY, topX, topY);
        return overlapRectangle.calculateArea();
    }

    public int overlap() {
        return this.overlap;
    }

    public static void main(String[] args) {
        CalculateOverlap calculateOverlap = new CalculateOverlap(-1,-1,10,10,-1,0,3,9);
        System.out.println("Should return 36: Result -> "+ calculateOverlap.overlap());

        CalculateOverlap calculateOverlap1 = new CalculateOverlap(0,0,3,3, 3000, 3000, 1000,9992);
        System.out.println("Should return 0: Result -> " + calculateOverlap1.overlap());

        CalculateOverlap calculateOverlap2 = new CalculateOverlap(-5,-4,-2,0,-5,-3,-3,-1);
        System.out.println("Should return 4: Result -> " + calculateOverlap2.overlap());

        CalculateOverlap calculateOverlap5 = new CalculateOverlap(-5,0,0,7,-6,3,-4,5);
        System.out.println("Should return 2: Result -> " + calculateOverlap5.overlap());

        CalculateOverlap calculateOverlap6 = new CalculateOverlap(5,0,11,4,7,3,9,5);
        System.out.println("Should return 2: Result -> " + calculateOverlap6.overlap());

        CalculateOverlap calculateOverlap8 = new CalculateOverlap(5,0,11,4,7,1, 9,3);
        System.out.println("Should return 4: Result -> " + calculateOverlap8.overlap());

        CalculateOverlap calculateOverlap9 = new CalculateOverlap(5,0,11,4,7,-1,9,1);
        System.out.println("Should return 2: Result -> " + calculateOverlap9.overlap());

        CalculateOverlap calculateOverlap3 = new CalculateOverlap(5,0,11,4,9,1,10,3);
        System.out.println("Should return 2: Result -> " + calculateOverlap3.overlap());

        CalculateOverlap calculateOverlap4 = new CalculateOverlap(0,0,3,4,0,2,5,4);
        System.out.println("Should return 6: Result -> " + calculateOverlap4.overlap());
    }
}