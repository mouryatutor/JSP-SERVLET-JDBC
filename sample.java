class Sample {
    
    public static void main(String[] args) {
        System.out.println("Hello World");

        int sum = 0;
        for (int i : new int[]{1, 2, 3, 4, 5}) {
            sum += i;
        }
        System.out.println("Sum is: " + sum);

        System.out.println("Done");

    }

    
}
