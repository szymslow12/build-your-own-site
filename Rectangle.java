public class Rectangle {

    private int bottomLeftX;
    private int bottomLeftY;
    private int topRightX;
    private int topRightY;

    public Rectangle(int x1, int y1, int x2, int y2) {
        this.bottomLeftX = x1;
        this.bottomLeftY = y1;
        this.topRightX = x2;
        this.topRightY = y2;
    }


    public int calculateArea() {
        int a = topRightY - bottomLeftY;
        int b = topRightX - bottomLeftX;
        return a * b;
    }


    public int getBottomLeftX() {
        return bottomLeftX;
    }


    public int getBottomLeftY() {
        return bottomLeftY;
    }


    public int getTopRightX() {
        return topRightX;
    }


    public int getTopRightY() {
        return topRightY;
    }
}