public class CalculateOverlap {
    private Rectangle r1;
    private Rectangle r2;

    public CalculateOverlap(Rectangle r1, Rectangle r2) {

        this.r1 = r1;
        this.r2 = r2;
        System.out.println(r1.calculateArea() + "--" + r2.calculateArea());
    }

    /*public int calculate() {
        int iLeft = Math.max(leftX1, leftX2);
        int iRight = Math.min(rightX1, rightX2);
        int iTop = Math.max(leftX1, topY2);
        int iBottom = Math.min(bottomY1, bottomY2);

        int si = Math.max(0, iRight - iLeft) * Math.max(0, iBottom - iTop);
        int sa = (rightX1 - leftX1) * (bottomY1 - topY1);
        int sb = (rightX2 - leftX2) * (bottomY2 - topY2);

        return sa + sb - si;
    }*/

    public static void main(String[] args) {
        Rectangle r1 = new Rectangle(-1, -1, 10, 10);
        Rectangle r2 = new Rectangle(-1, 0, 3, 9);
        CalculateOverlap calculateOverlap = new CalculateOverlap(r1, r2);
        System.out.println(new Rectangle(3, 0, 5, 5).calculateArea());
    }
}